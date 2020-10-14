import React from 'react';

// components
import SideBar from './components/SideBar'
import MainContent from './components/MainContent'

import {WheaterContext} from './context/wheater-context'
import {getBylocation,getByLocationId} from './api/getApiWheater'
import useLocation from './hooks/location'

function App() {

  const {state,dispatch}=React.useContext(WheaterContext)
  const {latitude,longitude}=useLocation()

//   React.useEffect(()=>{
//     if (latitude && longitude) {
//       getBylocation(latitude ,longitude)
//       .then(response=>setState(state.currentLocation=response.data[0]))
//       .catch(err=>console.log(err.message))
//     }
//   },[latitude,longitude])


// React.useEffect(()=>{
//   if (state.currentLocation.woeid) {  
//     getByLocationId(location.woeid)
//     .then(response=>setDailyWheater(response.data.consolidated_weather))
//     .catch(err=>console.log(err))
//   }
// },[location.woeid])

React.useEffect(()=>{
dispatch({
    type:"TEST",
    data:'hello'
  })
},[])
console.log(state);
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-3/12 bg-liteBlue h-auto lg:h-screen">
        <SideBar/>
      </div>
      <div className="w-full bg-darkBlue h-auto lg:h-screen">
        <MainContent data="hehe"/>
      </div>
    </div>
  );
}

export default App;
