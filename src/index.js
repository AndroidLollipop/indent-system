import * as React from 'react'
import * as ReactDOM from 'react-dom'

import socketIOClient from "socket.io-client";

import * as Material from "@material-ui/core"

var serverURL = "http://127.0.0.1:4001"

var setTabs
var additionalTabs = []
var tabID = 0
const addTab = (tab) => {
  additionalTabs = [...additionalTabs]
  additionalTabs.push(tab)
  setTabs(additionalTabs)
}
const removeTab = (id) => {
  additionalTabs = [...additionalTabs].filter(x => x[0] !== id)
  detailPersistentStore[id] = undefined
  setTabs(additionalTabs)
}

var socket

const App = () => {
  
  var [tabs, mySetTabs] = React.useState([])
  setTabs = mySetTabs
  React.useEffect(() => {
    socket = socketIOClient(serverURL);
    socket.on("sendIndents", (indents, writeToken) => {
      if (writeToken !== undefined) {
        if (writeToken < ackWriteToken) {
          return
        }
        ackWriteToken = writeToken
        if (pendingWrites[writeToken] !== undefined) {
          pendingWrites[writeToken]()
        }
      }
      dataStore = [...indents]
      notifyNewData()
    })
    socket.on("sendNotifications", (notifications) => {
      notificationsStore = [...notifications]
      notifyNewN()
    })
    socket.emit("requestIndents", "")
    socket.emit("requestNotifications", "")
    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <Tabs>
      {[(<div label="view indents" key="defaultTab1" mykey="defaultTab1">
        <TransportView/>
      </div>),
      (<div label="new indent" key="defaultTab2" mykey="defaultTab2">
        <NewIndentView/>
      </div>),
      (<div label="notifications" key="defaultTab3" mykey="defaultTab3">
        <NotificationsPanel/>
      </div>),
      (<div label="dev" key="defaultTab4" mykey="defaultTab4">
        <DevPanel/>
      </div>), ...tabs.map(v => (<DetailGenerator mykey={v[0]} label={readDataStore(v[1]).name} removable="true" removeCallback={() => removeTab(v[0])} details={v} key={v[0]} />))]}
    </Tabs>
  );
}

const DevPanel = () => {
  const [myServerURL, setServerURL] = React.useState(serverURL)
  const [response, setResponse] = React.useState("");
  const myListener = data => {
    setResponse(data)
  }

  React.useEffect(() => {
    socket.on("FromAPI", myListener);
    socket.emit("ToAPI", "Hello!")
    return () => {
      socket.emit("ToAPI", "Goodbye!")
      socket.off("FromAPI", myListener)
    }
  }, []);

  return (<div>
    <div>Server URL</div><textarea value={myServerURL} onChange={(event) => {
      serverURL = event.target.value
      setServerURL(serverURL)
    }}/>
    <div>It's {response}</div>
  </div>)
}

const NotificationsPanel = () => {
  var myData = readNotifications()
  const [data, setData] = React.useState(myData)
  React.useEffect(() => {
    const callbackID = registerNotify(setData)
    return () => deregisterNotify(callbackID)
  }, [])
  var newData = []
  const encountered = {}
  for (var i = myData.length-1; i > -1; i--) {
    if (encountered[myData[i].internalUID] === true) {
      newData.unshift({...myData[i], latest: false})
    }
    else {
      newData.unshift({...myData[i], latest: true})
    }
    encountered[myData[i].internalUID] = true
  }
  return (<ListFactory data={newData} generator={(x, index) => notificationItemGenerator(x, x.internalUID, ""+x.internalUID+index)} style={TransportViewStyle}/>)
}

const detailPersistentStore = {}

const DetailGenerator = ({details}) => {
  const [id, index] = details
  if (detailPersistentStore[id] === undefined) {
    detailPersistentStore[id] = readDataStore(index)
  }
  const [data, setData] = React.useState(detailPersistentStore[id])
  return (
  <div>
  <ListFactory header={(<Material.TableHead><Material.TableRow>{formFields.map((x, index) => (<Material.TableCell key={index}>{x.friendlyName}</Material.TableCell>))}</Material.TableRow></Material.TableHead>)} data={[data]} generator={x => detailItemGenerator(x, x.internalUID)} style={TransportViewStyle}/>
  <Material.Select variant="outlined" native value={data.status} onChange={(event) => {
    detailPersistentStore[id] = {...detailPersistentStore[id], status: event.target.value}
    setData(detailPersistentStore[id])
  }}>
  {statuses.map((val, index) => (<option key={index} value={val}>{val}</option>))}
  </Material.Select>
  <Material.Button variant="outlined" onClick={() => {editData(index, detailPersistentStore[id])}}>Save</Material.Button>
  </div>
  )
}

const editData = async (index, newData) => {
  const refresh = await writeDataStore(index, newData)
  if (refresh) {
    notifyNewData()
  }
}

const readDataStore = (internalUID) => {
  const result = dataStore.filter(x => x.internalUID === internalUID)
  if (result.length === 0) {
    return undefined
  }
  else {
    return result[0]
  }
}

var ackWriteToken = 0
var currWriteToken = 0
var pendingWrites = []


const writeDataStore = async (internalUID, write) => {
  currWriteToken++
  var resolve
  const myPromise = new Promise(v => resolve=v)
  pendingWrites[currWriteToken] = resolve
  socket.emit("writeDataStore", [internalUID, write, currWriteToken])
  await myPromise
  if (currWriteToken === ackWriteToken) {
    return true
  }
  else {
    return false
  }
}

const appendDataStore = async (write) => {
  currWriteToken++
  var resolve
  const myPromise = new Promise(v => resolve=v)
  pendingWrites[currWriteToken] = resolve
  socket.emit("appendDataStore", [write, currWriteToken])
  await myPromise
  if (currWriteToken === ackWriteToken) {
    return true
  }
  else {
    return false
  }
}

const readRange = () => {
  return dataStore
}

const submitForm = async (data) => {
  const refresh = await appendDataStore(data)
  if (refresh) {
    notifyNewData()
  }
}

const FormFactory = ({fields, defaults}) => {
  var fieldStates = []
  const [states, setStates] = React.useState(fields.map(x => x.initialData))
  var myStates = states
  for (var index = 0; index < fields.length; index++) {
    const i = index
    const field = fields[i]
    fieldStates.push([states[i], x => {
      myStates = [...myStates]
      myStates[i] = x
      setStates(myStates)
    },field.initialData, field.name, field.friendlyName])
  }
  const initializeFields = () => {
    setStates(fields.map(x => x.initialData))
  }
  const submit = () => {
    var constitutedObject = {}
    for (const {name, initialData} of defaults) {
      constitutedObject[name] = initialData
    }
    for (const [text, setText, initialData, fieldName] of fieldStates) {
      constitutedObject[fieldName] = text
    }
    submitForm(constitutedObject)
    initializeFields()
  }
  return (
  <form noValidate>
  <div>
  {fieldStates.map(([text, setText, initialData, fieldName, friendlyName], index) => {
    return (
      <div style={formItemStyle} key={index}>
      <Material.TextField multiline label={friendlyName} variant="outlined" value={text} onChange={(event) => setText(event.target.value)}/>
      </div>
    )
  })}
  </div>
  <Material.Button variant="outlined" onClick={submit}>submit</Material.Button>
  </form>
  )
}

const formItemStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "5px"
}

const NewIndentView = () => {
  return (<div style={TransportViewStyle}><FormFactory fields={formFields} defaults={dataDefaults}/></div>)
}

const TransportView = () => {
  const [data, setData] = React.useState(readRange())
  React.useEffect(() => {
    const callbackID = registerCallback(setData)
    return () => deregisterCallback(callbackID)
  }, [])
  return (<ListFactory header={(<Material.TableHead><Material.TableRow>{displayFields.map((x, index) => (<Material.TableCell key={index}>{x.friendlyName}</Material.TableCell>))}</Material.TableRow></Material.TableHead>)} data={data} generator={x => transportItemGenerator(x, x.internalUID)} style={TransportViewStyle}/>)
}

const TransportViewStyle = {
  font: "20px Arial, sans-serif"
}

const transportItemGenerator = (data, index) => {
  return (
    <Material.TableRow key={data.internalUID} onClick={() => addDetailTab(data, index)}>
      <Material.TableCell>{data.name}</Material.TableCell>
      <Material.TableCell>{data.startDateTime}</Material.TableCell>
      <Material.TableCell>{data.endDateTime}</Material.TableCell>
      <Material.TableCell>{data.origin}</Material.TableCell>
      <Material.TableCell>{data.destination}</Material.TableCell>
      <Material.TableCell>{data.POC}</Material.TableCell>
      <Material.TableCell>{data.POCPhone}</Material.TableCell>
      <Material.TableCell>{data.status}</Material.TableCell>
    </Material.TableRow>
  )
}

const detailItemGenerator = (data, index) => {
  return (
    <Material.TableRow key={data.internalUID} onClick={() => addDetailTab(data, index)}>
      <Material.TableCell>{data.name}</Material.TableCell>
      <Material.TableCell>{data.startDateTime}</Material.TableCell>
      <Material.TableCell>{data.endDateTime}</Material.TableCell>
      <Material.TableCell>{data.origin}</Material.TableCell>
      <Material.TableCell>{data.destination}</Material.TableCell>
      <Material.TableCell>{data.POC}</Material.TableCell>
      <Material.TableCell>{data.POCPhone}</Material.TableCell>
    </Material.TableRow>
  )
}

const notificationItemGenerator = (data, index, key) => {
  return (
    <Material.TableRow key={key} onClick={() => addDetailTab(data, index)}><Material.TableCell style={notificationItemStyle(data.latest)} align="center">{data.title}</Material.TableCell></Material.TableRow>
  )
}

const notificationItemStyle = (latest) => {
  if (latest === false) {
    return {
      color: "grey"
    }
  }
  else {
    return {}
  }
}

const addDetailTab = (data, index) => {
  addTab([tabID, index])
  tabID++
}

const ListFactory = ({data, generator, style, header, tail}) => {
  return (
    <Material.TableContainer>
      <Material.Table>
        {header}
        <Material.TableBody>
          {data.map(generator)}
        </Material.TableBody>
        {tail}
      </Material.Table>
    </Material.TableContainer>
  )
}

const getCallbackSystem = (dataSource) => {

  const registeredCallbacks = []

  const registerCallback = (callback) => {
    return registeredCallbacks.push(callback)-1
  }

  const deregisterCallback = (id) => {
    if (id > -1 && id < registeredCallbacks.length) {
      registeredCallbacks[id] = ()=>{}
    }
  }
  
  const notifyNewData = () => {
    for (const callback of registeredCallbacks) {
      callback(dataSource())
    }
  }

  return [registerCallback, deregisterCallback, notifyNewData]
}

var dataStore = []

const readNotifications = () => {
  return notificationsStore
}

var notificationsStore = []

const statuses = ["Pending", "Submitted", "Recommended"]

const formFields = [{name: "name", initialData: "", friendlyName: "Indent title"}, {name: "startDateTime", initialData: "", friendlyName: "Start time"}, {name: "endDateTime", initialData: "", friendlyName: "End time"}, {name: "origin", initialData: "", friendlyName: "Origin"}, {name: "destination", initialData: "", friendlyName: "Destination"}, {name: "POC", initialData: "", friendlyName: "Contact person"}, {name: "POCPhone", initialData: "", friendlyName: "Contact person number"}]

const dataDefaults = [{name: "status", initialData: "Pending", friendlyName: "Status"}]

const displayFields = [...formFields, ...dataDefaults]

const Tabs = ({children}) => {
  const [selTab, setSelTab] = React.useState(0);
  return (
    <div>
      <Material.AppBar position="static">
        <Material.Tabs variant="scrollable" value={Math.min(selTab, children.length-1)}>
          {children.map((child, index) => {
            const obj = {...child.props, onClick: () => {setSelTab(index)}, active: index === Math.min(selTab, children.length-1), key: child.props.mykey}
            return (<Tab {...obj}></Tab>)
          })}
        </Material.Tabs>
      </Material.AppBar>
      <div>
        {children[Math.min(selTab, children.length-1)]}
      </div>
    </div>
  )
}

const Tab = ({label, onClick, active, removable, removeCallback}) => {
  return (
    <div>
      <Material.Tab label={(<span>{" "+label+" "} {removable ? (<Material.IconButton size="small" onClick={removeCallback}>{"❌"}</Material.IconButton>) : undefined}</span>)} onClick={onClick}/>
    </div>
  )
}

const TabCloseStyle = {
  font: "16px Arial, sans-serif",
  margin: "auto"
}

const [registerCallback, deregisterCallback, notifyNewData] = getCallbackSystem(readRange)

const [registerNotify, deregisterNotify, notifyNewN] = getCallbackSystem(readNotifications)

ReactDOM.render(
  <div style={{textAlign: "center"}}>
    <App/>
  </div>,
  document.getElementById('root')
);
