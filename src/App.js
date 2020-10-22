import React from 'react';
// components
import SideBar from './components/SideBar'
import MainContent from './components/MainContent'
import Search from './components/Search'
// context
import {WheaterContext} from './context/wheater-context'
import {getCurrentLocation,getDailyWheater} from './context/action'
// api
import {getBylocation,getByLocationId} from './api/getApiWheater'
// hooks
import useLocation from './hooks/location'

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

function App() {
  // toogleSearch bar
  const [activeSearch,setActiveSearch]=React.useState(false)
  
  const [status,setStatus]=React.useState(statusList.idle)
  const {state,dispatch}=React.useContext(WheaterContext)
  const {latitude,longitude,messageStatus}=useLocation()

  React.useEffect(()=>{
    if (latitude && longitude) { 
      (async()=>{
        try {
          let response=await getBylocation(latitude,longitude)
          dispatch(getCurrentLocation(response.data[0]))
        } catch (error) {
          console.error(error.message)
        }
      })()
    }
  },[dispatch,latitude,longitude])


React.useEffect(()=>{
  if (state.currentLocation.woeid) {  
    (async()=>{
      try {
        setStatus(statusList.process)
        let reponse=await getByLocationId(state.currentLocation.woeid)
        dispatch(getDailyWheater(reponse.data.consolidated_weather))
        setStatus(statusList.success)
      } catch (err) {
        console.error(err.message);
      }
    })()
  }
},[dispatch,state.currentLocation.woeid])

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-3/12 bg-liteBlue h-screen overflow-y-auto">
        <Search activeSearch={activeSearch} setActiveSearch={setActiveSearch}/>
        {/* if active false */}
        {activeSearch===false ? <div>
          {/* check for geolocation */}
          {messageStatus === "User denied Geolocation"  ? 
          status===statusList.idle ? <div className="mt-64 text-center text-3xl text-white "> Cant find Your Location,Please Search</div> : ""
          :""}

          {status===statusList.success ? <SideBar wheater={state.dailyWheater[0]} location={state.currentLocation} typeTemp={state.currentTemp}/> :
            <div className=" mt-64 text-center text-3xl text-white ">
            Loading....
            </div>
          }
        </div> 
        :""}
      </div>
      <div className="w-full bg-darkBlue h-auto lg:h-screen overflow-y-auto">
      {status===statusList.success ? <MainContent wheaterItems={state.dailyWheater} typeTemp={state.currentTemp} dispatch={dispatch}/> :
          <div className=" mt-64 text-center text-3xl text-white ">
           Loading....
          </div>
        }
        
      </div>
    </div>
  );
}

export default App;
