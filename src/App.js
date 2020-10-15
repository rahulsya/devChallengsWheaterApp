import React from 'react';

// components
import SideBar from './components/SideBar'
import MainContent from './components/MainContent'

import {WheaterContext} from './context/wheater-context'
import {getCurrentLocation,getDailyWheater} from './context/action'

import {getBylocation,getByLocationId} from './api/getApiWheater'

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

function App() {
  const [status,setStatus]=React.useState(statusList.idle)
  const {state,dispatch}=React.useContext(WheaterContext)

  React.useEffect(()=>{
    (async()=>{
      try {
        setStatus(statusList.process)
        
        let response=await getBylocation('-6.2706','106.8849')
        dispatch(getCurrentLocation(response.data[0]))

        setStatus(statusList.success)
      } catch (error) {
        console.error(error.message)
      }
    })()
  },[dispatch])


React.useEffect(()=>{
  if (state.currentLocation.woeid) {  
    (async()=>{
      try {
        setStatus(statusList.process)
        let reponse=await getByLocationId(state.currentLocation.woeid)
        dispatch(getDailyWheater(reponse.data))
        
        setStatus(statusList.success)
      } catch (err) {
        console.error(err.message);
      }
    })()
  }
},[dispatch,state.currentLocation.woeid])

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-3/12 bg-liteBlue h-auto lg:h-screen">
        <div className="text-3xl text-white">
          {status}
        </div>
        <SideBar/>
      </div>
      <div className="w-full bg-darkBlue h-auto lg:h-screen">
        <MainContent data="hehe"/>
      </div>
    </div>
  );
}

export default App;
