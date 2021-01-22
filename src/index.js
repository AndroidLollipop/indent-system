import * as React from 'react'
import * as ReactDOM from 'react-dom'

import socketIOClient from "socket.io-client";

import * as Material from "@material-ui/core"
import * as Icons from "@material-ui/icons"
import SearchBar from "material-ui-search-bar"

import appLogo from "./resources/logo.jpg"
import sir5logo from "./resources/5sirlogo.jpg"

const ranker = require("./searchRanker.js")

var serverURL = "https://murmuring-ocean-38436.herokuapp.com/"

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
    socket = socketIOClient(serverURL, {secure: true});
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
      dataStore = [...indents].reverse()
      notifyNewData()
    })
    socket.on("sendNotifications", (notifications) => {
      notificationsStore = [...notifications].reverse()
      notifyNewN()
    })
    socket.emit("requestIndents", "")
    socket.emit("requestNotifications", "")
    return () => {
      socket.disconnect()
    }
  }, [])
  const [selTab, setSelTab] = React.useState(0)
  const appbarRef = React.useRef(null)
  const heightListeners = React.useRef([])
  const currentHeight = React.useRef(0)

  React.useEffect(() => {
    if (appbarRef.current) {
      currentHeight.current = appbarRef.current.offsetHeight
      for (const listener of heightListeners.current) {
        listener(appbarRef.current.offsetHeight)
      }
    }
  }, [appbarRef])

  return (
    <div>
      <Tabs selTab={selTab} setSelTab={setSelTab} appbarRef={appbarRef}>
        {[(<div label="view indents" key="defaultTab1" mykey="defaultTab1">
          <TransportView setSelTab={setSelTab} heightProvider={[currentHeight, heightListeners]} />
        </div>),
        (<div label="new indent" key="defaultTab2" mykey="defaultTab2">
          <NewIndentView/>
        </div>),
        (<div label="notifications" key="defaultTab3" mykey="defaultTab3">
          <NotificationsPanel setSelTab={setSelTab}/>
        </div>), ...tabs.map((v, i) => (<DetailGenerator mykey={v[0]} label={readDataStore(v[1]).name} removable="true" removeCallback={(index, length) => {
          removeTab(v[0])
          const currSelTab = Math.min(selTab, length-1)
          if (currSelTab > index) {
            setSelTab(currSelTab-1)
          }
        }} details={v} key={v[0]} heightProvider={[currentHeight, heightListeners]} />))]}
      </Tabs>
      <div style={{height: "12px"}}/>
      <img src={sir5logo} width="192px"/>
    </div>
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
    return () => {
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

const NotificationsPanel = ({setSelTab}) => {
  var myData = readNotifications()
  const [data, setData] = React.useState(myData)
  React.useEffect(() => {
    const callbackID = registerNotify(setData)
    return () => deregisterNotify(callbackID)
  }, [])
  var newData = []
  const encountered = {}
  for (var i = 0; i < myData.length; i++) {
    if (encountered[myData[i].internalUID] === true) {
      newData.push({...myData[i], latest: false})
    }
    else {
      newData.push({...myData[i], latest: true})
    }
    encountered[myData[i].internalUID] = true
  }
  return (
    <div>
      <div style={{height: "12px"}}/>
      <Material.Paper square>
        <ListFactory data={newData} generator={(x, index) => notificationItemGenerator(x, x.internalUID, ""+x.internalUID+index, setSelTab)} style={TransportViewStyle}/>
      </Material.Paper>
    </div>
  )
}

const detailPersistentStore = {}

const DetailGenerator = ({details, heightProvider}) => {
  const [id, index] = details
  if (detailPersistentStore[id] === undefined) {
    detailPersistentStore[id] = readDataStore(index)
  }
  const [data, setData] = React.useState(detailPersistentStore[id])
  return (
  <div>
    <div style={{height:"12px"}}/>
    <Material.Paper square>
      <ListFactory header={(<MyStickyHeader heightProvider={heightProvider}>{formFields.map((x, index) => (<Material.TableCell key={index}>{x.friendlyName}</Material.TableCell>))}</MyStickyHeader>)} data={[data]} generator={x => detailItemGenerator(x, x.internalUID)} style={TransportViewStyle}/>
    </Material.Paper>
    <div style={{height:"12px"}}/>
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

const FormFactory = ({fields, defaults, formPersistentStore}) => {
  var fieldStates = []
  var myPersistentStore = formPersistentStore === undefined ? {} : formPersistentStore
  if (myPersistentStore.data === undefined) {
    myPersistentStore.data = fields.map(x => x.initialData)
  }
  const [states, setStates] = React.useState(myPersistentStore.data)
  var myStates = states
  for (var index = 0; index < fields.length; index++) {
    const i = index
    const field = fields[i]
    fieldStates.push([states[i], x => {
      myStates = [...myStates]
      myStates[i] = x
      myPersistentStore.data = myStates
      setStates(myStates)
    },field.initialData, field.name, field.friendlyName, field.fieldType])
  }
  const initializeFields = () => {
    const initializedFields = fields.map(x => x.initialData)
    myPersistentStore.data = initializedFields
    setStates(initializedFields)
  }
  const submit = () => {
    var constitutedObject = {}
    for (const {name, initialData} of defaults) {
      constitutedObject[name] = initialData
    }
    for (const [text, setText, initialData, fieldName, friendlyName, fieldType] of fieldStates) {
      const normalizer = normalizers[fieldType]
      constitutedObject[fieldName] = normalizer ? normalizer(text) : text
    }
    submitForm(constitutedObject)
    initializeFields()
  }
  return (
  <form noValidate>
  <div>
  {fieldStates.map(([text, setText, initialData, fieldName, friendlyName, fieldType], index) => {
    return (
      <div style={formItemStyle} key={index}>
      {fieldType === "datetime" ?
      (<Material.TextField
        id="datetime-local"
        fullWidth={true}
        label={friendlyName}
        type="datetime-local"
        variant="outlined"
        onChange={(event) => setText(event.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        style={{maxWidth: "1000px"}}
      />)
      :(<Material.TextField fullWidth={true} multiline label={friendlyName} variant="outlined" value={text} onChange={(event) => setText(event.target.value)} InputLabelProps={{shrink: true,}} style={{maxWidth: "1000px"}}/>)
      }
      </div>
    )
  })}
  </div>
  <Material.Button variant="outlined" onClick={submit}>submit</Material.Button>
  </form>
  )
}

const normalizers = {
  "datetime": x => {
    try {
      if (x.length > 0) {
        return x.slice(8, 10) + "/" + x.slice(5, 7) + "/" + x.slice(0, 4) + " " + x.slice(11, 16)
      }
    }
    catch {
    }
    return x
  }
}

const formItemStyle = {
  display: "flex",
  justifyContent: "center",
  paddingLeft: "12px",
  paddingRight: "12px",
  paddingTop: "5px",
  paddingBottom: "7px"
}

const newIndentPersistentStore = {}

const NewIndentView = () => {
  return (<div style={TransportViewStyle}><div style={{height: "12px"}}/><FormFactory fields={formFields} defaults={dataDefaults} formPersistentStore={newIndentPersistentStore}/></div>)
}

const DEBOUNCE_PERIOD = 100

const transportPersistentStore = {}

const TransportView = ({setSelTab, heightProvider}) => {
  const range = readRange()
  React.useEffect(() => {
    const callbackID = registerCallback(value => {
      myData.current = value
      myRanker.current = ranker.makeRanker(value)
      setData(myQuery.current !== "" ? myRanker.current(myQuery.current) : value)
    })
    return () => deregisterCallback(callbackID)
  }, [])
  const [search, setSearch] = React.useState(transportPersistentStore.data)
  const last = React.useRef(null)
  const myData = React.useRef(range)
  const vRanker = ranker.makeRanker(range)
  const myRanker = React.useRef(vRanker)
  if (transportPersistentStore.data === undefined) {
    transportPersistentStore.data = ""
  }
  const myQuery = React.useRef(transportPersistentStore.data)
  const [data, setData] = React.useState(transportPersistentStore.data !== "" ? vRanker(transportPersistentStore.data) : range)
  const onChange = value => {
    setSearch(value)
    if (last.current !== null) {
      clearTimeout(last.current)
      last.current = null
    }
    last.current = setTimeout(() => {
      myQuery.current = value
      transportPersistentStore.data = value
      setData(value !== "" ? myRanker.current(value) : myData.current)
      last.current = null
    }, DEBOUNCE_PERIOD)
  }
  const barRef = React.useRef(null)
  const filteredData = React.useMemo(() => data.filter(x => x.status !== "Hidden"), [data])
  return (
    <div>
      <div style={{height: "12px"}}/>
      <div style={{marginLeft: "12px", marginRight: "12px"}}>
        <SearchBar
          ref={barRef}
          value={search}
          onChange={onChange}
          onCancelSearch={() => onChange("")}
          onRequestSearch={() => barRef.current.focus()}
          style={{margin: "auto", maxWidth: "1000px"}}
          />
      </div>
      <div style={{height: "12px"}}/>
      <Material.Paper square>
        <ListFactory header={(<MyStickyHeader heightProvider={heightProvider}>{displayFields.map((x, index) => (<Material.TableCell key={index}>{x.friendlyName}</Material.TableCell>))}</MyStickyHeader>)} data={filteredData} generator={x => transportItemGenerator(x, x.internalUID, setSelTab)} style={TransportViewStyle}/>
      </Material.Paper>
    </div>
  )
}

const MyStickyHeader = ({children, heightProvider: [currentHeight, heightListeners]}) => {
  const headRef = React.useRef(null)
  React.useEffect(() => {
    var height = currentHeight.current
    const capturedTop = headRef.current.getBoundingClientRect().top+window.scrollY
    const recomputeTop = () => {
      const targetPosition = Math.max(window.scrollY+height-capturedTop, 0)
      setTop(targetPosition)
    }
    recomputeTop()
    const myIndex = heightListeners.current.push(newHeight => {
      height = newHeight
      recomputeTop()
    })-1
    window.addEventListener("scroll", recomputeTop)
    return () => {
      heightListeners.current[myIndex] = ()=>{}
      window.removeEventListener("scroll", recomputeTop)
    }
  }, [])
  const [top, setTop] = React.useState(0)
  return <Material.TableHead><Material.TableRow ref={headRef} style={{pointerEvents: "none", transform: "translate(0,"+top+"px)"}}>{children}</Material.TableRow></Material.TableHead>
}

const TransportViewStyle = {
  font: "20px Arial, sans-serif"
}

const transportItemGenerator = (data, index, setSelTab) => {
  return (
    <Material.TableRow key={data.internalUID} onClick={() => {
      addDetailTab(data, index)
      setSelTab(Infinity)
    }}>
      <Material.TableCell>{data.name}</Material.TableCell>
      <Material.TableCell>{data.startDateTime}</Material.TableCell>
      <Material.TableCell>{data.endDateTime}</Material.TableCell>
      <Material.TableCell>{data.origin}</Material.TableCell>
      <Material.TableCell>{data.destination}</Material.TableCell>
      <Material.TableCell>{data.POC}</Material.TableCell>
      <Material.TableCell>{data.POCPhone}</Material.TableCell>
      <Material.TableCell>{data.vehicles}</Material.TableCell>
      <Material.TableCell>{data.notes}</Material.TableCell>
      <Material.TableCell>{data.status}</Material.TableCell>
    </Material.TableRow>
  )
}

const detailItemGenerator = (data, index) => {
  return (
    <Material.TableRow key={data.internalUID}>
      <Material.TableCell>{data.name}</Material.TableCell>
      <Material.TableCell>{data.startDateTime}</Material.TableCell>
      <Material.TableCell>{data.endDateTime}</Material.TableCell>
      <Material.TableCell>{data.origin}</Material.TableCell>
      <Material.TableCell>{data.destination}</Material.TableCell>
      <Material.TableCell>{data.POC}</Material.TableCell>
      <Material.TableCell>{data.POCPhone}</Material.TableCell>
      <Material.TableCell>{data.vehicles}</Material.TableCell>
      <Material.TableCell>{data.notes}</Material.TableCell>
    </Material.TableRow>
  )
}

const notificationItemGenerator = (data, index, key, setSelTab) => {
  return (
    <Material.TableRow key={key} onClick={() => {
      addDetailTab(data, index)
      setSelTab(Infinity)
    }}><Material.TableCell style={notificationItemStyle(data.latest)} align="center">{data.title}</Material.TableCell></Material.TableRow>
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
      <Material.Table stickyHeader>
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

const statuses = ["Pending", "Submitted", "Recommended", "Hidden"]

const formFields = [{name: "name", initialData: "", friendlyName: "Purpose"}, {name: "startDateTime", initialData: "", friendlyName: "Start time", fieldType: "datetime"}, {name: "endDateTime", initialData: "", friendlyName: "End time", fieldType: "datetime"}, {name: "origin", initialData: "", friendlyName: "Reporting location"}, {name: "destination", initialData: "", friendlyName: "Destination"}, {name: "POC", initialData: "", friendlyName: "Contact person"}, {name: "POCPhone", initialData: "", friendlyName: "Contact person number"}, {name: "vehicles", initialData: "", friendlyName: "Vehicles"}, {name: "notes", initialData: "", friendlyName: "Notes"}]

const dataDefaults = [{name: "status", initialData: "Pending", friendlyName: "Status"}]

const displayFields = [...formFields, ...dataDefaults]

const Tabs = ({children, selTab, setSelTab, appbarRef}) => {
  const pre = [(<Material.Tab style={{opacity: 1, minWidth: 0, minHeight:0, padding: 0}} disableRipple selected label={<div style={{height: "48px", width: "48px"}}><img src={appLogo} height="48px" width="48px"/></div>}/>)]
  return (
    <div>
      <Material.AppBar position="sticky" style={{top: "env(safe-area-inset-top)"}} ref={appbarRef}>
        <Material.Tabs variant="scrollable" value={Math.min(selTab, children.length-1)+pre.length}>
          {[...pre , ...children.map((child, index) => {
            const obj = {...child.props, removeCallback: () => child.props.removeCallback(index, children.length), onClick: () => {setSelTab(index)}, active: index === Math.min(selTab, children.length-1), key: child.props.mykey}
            return (<Tab {...obj}></Tab>)
          })]}
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
    <Material.Tab style={{padding: 0}} disableRipple selected label={(<span><Material.Tab label={label} onClick={onClick} selected={active ? true : null}/>
      {removable ? (<Material.IconButton size="small" onClick={removeCallback}><Icons.Close style={{fill: "red"}}/></Material.IconButton>) : undefined}
      </span>)}/>
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
