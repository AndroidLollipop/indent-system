import * as React from 'react'
import * as ReactDOM from 'react-dom'

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

const App = () => {
  
  var [tabs, mySetTabs] = React.useState([])
  setTabs = mySetTabs
  const [temp, refresh] = React.useState(0)
  React.useEffect(() => {
    const callbackID = registerCallback(refresh)
    return () => deregisterCallback(callbackID)
  })

  return (
    <Tabs>
      {[(<div label="view indents">
        <TransportView/>
      </div>),
      (<div label="new indent">
        <NewIndentView/>
      </div>),
      (<div label="notifications">
        <NotificationsPanel/>
      </div>), ...tabs.map(v => (<DetailGenerator label={readDataStore(v[1]).name} removable="true" removeCallback={() => removeTab(v[0])} details={v} key={v[0]} />))]}
    </Tabs>
  );
}

const NotificationsPanel = () => {
  var myData = readNotifications()
  const [data, setData] = React.useState(myData)
  var callbackID
  React.useEffect(() => {
    callbackID = registerNotify(setData)
    return () => deregisterNotify(callbackID)
  })
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
  return (<ListFactory data={newData} generator={x => notificationItemGenerator(x, x.internalUID)} style={TransportViewStyle}/>)
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
  <div onClick={() => removeTab(id)}>
  {"Start: "+data.startDateTime+" End: "+data.endDateTime+" Origin: "+data.origin+" Destination: "+data.destination+" POC: "+data.POC+" POC Number: "+data.POCPhone}
  </div>
  <select value={data.status} onChange={(event) => {
    detailPersistentStore[id] = {...detailPersistentStore[id], status: event.target.value}
    setData(detailPersistentStore[id])
  }}>
  {statuses.map(val => (<option value={val}>{val}</option>))}
  </select>
  <div onClick={() => {editData(index, detailPersistentStore[id])}}>Save</div>
  </div>
  )
}

const editData = (index, newData) => {
  setTimeout(() => {
    writeDataStore(index, newData)
    notifyNewData()
  }, fakeServerDelay)
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

const writeDataStore = (internalUID, write) => {
  const index = dataStore.findIndex(x => x.internalUID === internalUID)
  dataStore = [...dataStore]
  if (index > -1) {
    //MOCK SERVER, REMOVE IN PRODUCTION
    mockNotificationSystem(write, dataStore[index])
    dataStore[index] = write
  }
}

var internalUID = 3

const mockNotificationSystem = ({internalUID, status}, {internalUID: oldUID, status: oldStatus}) => {
  if (status !== oldStatus && internalUID === oldUID) {
    appendNotifications({title: readDataStore(internalUID).name+" is now "+status, internalUID: internalUID})
    notifyNewN()
  }
}

const appendDataStore = (write) => {
  dataStore = [...dataStore, {...write, internalUID: internalUID}]
  internalUID++
}

const readRange = () => {
  return dataStore
}

const sleep = async (x) => {
  return new Promise(resolve => setTimeout(resolve, x))
}

const loadDataStore = async () => {
  await sleep(fakeServerDelay)
}

const fakeServerDelay = 1000

const submitForm = (data) => {
  setTimeout(() => {
    appendDataStore(data)
    notifyNewData()
  }, fakeServerDelay)
}

const FormFactory = ({fields, defaults}) => {
  var fieldStates = []
  const [states, setStates] = React.useState(fields.map(x => x.initialData))
  var myStates = states
  for (var index = 0; index < fields.length; index++) {
    const i = index
    const field = fields[i]
    fieldStates.push([states[i], x => {
      myStates= [...myStates]
      myStates[i] = x
      setStates(myStates)
      console.log(myStates)
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
  <div>
  <div>
  {fieldStates.map(([text, setText, initialData, fieldName, friendlyName]) => {
    return (
      <div style={formItemStyle}>
      <div>{friendlyName}</div>
      <textarea value={text} onChange={(event) => setText(event.target.value)}/>
      </div>
    )
  })}
  </div>
  <div style={{backgroundColor: "gray", borderRadius: "10px", display: "inline-block", padding: "5px"}} onClick={submit}>submit</div>
  </div>
  )
}

const formItemStyle = {
  display: "flex",
  justifyContent: "center"
}

const NewIndentView = () => {
  return (<div style={TransportViewStyle}><FormFactory fields={formFields} defaults={dataDefaults}/></div>)
}

const TransportView = () => {
  const [data, setData] = React.useState(readRange())
  var callbackID
  React.useEffect(() => {
    callbackID = registerCallback(setData)
    return () => deregisterCallback(callbackID)
  })
  return (<ListFactory data={data} generator={x => transportItemGenerator(x, x.internalUID)} style={TransportViewStyle}/>)
}

const TransportViewStyle = {
  font: "20px Arial, sans-serif"
}

const transportItemGenerator = (data, index) => {
  return (
    <div onClick={() => addDetailTab(data, index)}>{"Title: "+data.name+" Start: "+data.startDateTime+" End: "+data.endDateTime+" Origin: "+data.origin+" Destination: "+data.destination+" POC: "+data.POC+" POC Number: "+data.POCPhone+" Status: "+data.status}</div>
  )
}

const notificationItemGenerator = (data, index) => {
  return (
    <div style={notificationItemStyle(data.latest)} onClick={() => addDetailTab(data, index)}>{data.title}</div>
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
    <div style={style}>
    {header}
    {data.map(generator)}
    {tail}
    </div>
  )
}

const getCallbackSystem = (dataSource) => {

  const registeredCallbacks = []

  const registerCallback = (callback) => {
    return registeredCallbacks.push(callback)-1
  }

  const deregisterCallback = (id) => {
    if (id > -1 && id < registerCallback.length) {
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

var dataStore = [{name: "Mandai Crematorium Indent", internalUID: 0, startDateTime: "01/04/2020 12:34", endDateTime: "01/04/2020 23:45", POC: "lmao", POCPhone: "999", origin: "Hell Camp", destination: "Hellish Camp", status: "Pending"}, {name: "Mandai Crematorium Indent", internalUID: 1, startDateTime: "01/04/2020 12:34", endDateTime: "01/04/2020 23:45", POC: "lmao", POCPhone: "999", origin: "Hell Camp", destination: "Hellish Camp", status: "Pending"}, {name: "Mandai Crematorium Indent", internalUID: 2, startDateTime: "01/04/2020 12:34", endDateTime: "01/04/2020 23:45", POC: "lmao", POCPhone: "999", origin: "Hell Camp", destination: "Hellish Camp", status: "Pending"}]

const readNotifications = () => {
  return notificationsStore
}

const appendNotifications = (write) => {
  notificationsStore = [...notificationsStore, write]
}

var notificationsStore = [{title: "Mandai Crematorium Indent is now Pending", internalUID: 0}]

const statuses = ["Pending", "Submitted", "Recommended"]

const formFields = [{name: "name", initialData: "", friendlyName: "Indent title"}, {name: "startDateTime", initialData: "", friendlyName: "Start time"}, {name: "endDateTime", initialData: "", friendlyName: "End time"}, {name: "origin", initialData: "", friendlyName: "Origin"}, {name: "destination", initialData: "", friendlyName: "Destination"}, {name: "POC", initialData: "", friendlyName: "Contact person"}, {name: "POCPhone", initialData: "", friendlyName: "Contact person number"}]

const dataDefaults = [{name: "status", initialData: "Pending", friendlyName: "Status"}]

const Tabs = ({children}) => {
  const [selTab, setSelTab] = React.useState(0);
  return (
    <div>
      <div style={TabsStyle}>
        {children.map((child, index) => {
          const obj = {...child.props, onClick: () => {setSelTab(index)}, active: index === Math.min(selTab, children.length-1)}
          return (<Tab {...obj}></Tab>)
        })}
      </div>
      <div>
        {children[Math.min(selTab, children.length-1)]}
      </div>
    </div>
  )
}

const TabsStyle = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "rgb(240,240,240)",
  overflow: "auto",
  whiteSpace: "nowrap"
}

const Tab = ({label, onClick, active, removable, removeCallback}) => {
  return (
    <span style={TabWrapperStyle}>
      <span style={TabStyle(active)}>
        <span onClick={onClick}>
        &nbsp;{label}&nbsp;
        </span>
        {removable ? (<span style={TabCloseStyle} onClick={removeCallback}>{"❌"}&nbsp;</span>) : undefined}
      </span>
    </span>
  )
}

const TabWrapperStyle = {
  padding: "10px 20px 0px 10px",
}

const TabCloseStyle = {
  font: "16px Arial, sans-serif"
}

const TabStyle = (active) => {
  return {
    transition: "all 0.25s",
    font: "25px Arial, sans-serif",
    backgroundColor: active?"rgb(225,225,225)":"rgb(150,150,150)",
    backgroundClip: "padding-box",
    borderRadius: "15px 15px 0px 0px",
    display: "flex",
    flexDirection: "row"
  }
}

const [registerCallback, deregisterCallback, notifyNewData] = getCallbackSystem(readRange)

const [registerNotify, deregisterNotify, notifyNewN] = getCallbackSystem(readNotifications)

ReactDOM.render(
  <div style={{textAlign: "center"}}>
    <App/>
  </div>,
  document.getElementById('root')
);
