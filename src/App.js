import React from 'react';

// components
import SideBar from './components/SideBar'
import MainContent from './components/MainContent'

import {getBylocation,getByLocationId} from './api/getApiWheater'
import {InfoLocationConxtex} from './context/infoLocation-context'
import useLocation from './hooks/location'

function App() {

//   const {location,setLocation}=React.useContext(InfoLocationConxtex)
//   const {latitude,longitude}=useLocation()

//   const[dailyWheater,setDailyWheater]=React.useState([])

//   React.useEffect(()=>{
//     if (latitude && longitude) {
//       getBylocation(latitude ,longitude)
//       .then(response=>setLocation(response.data[0]))
//       .catch(err=>console.log(err.message))
//     }
//   },[setLocation,latitude,longitude])


// React.useEffect(()=>{
//   if (location.woeid) {  
//     getByLocationId(location.woeid)
//     .then(response=>setDailyWheater(response.data.consolidated_weather))
//     .catch(err=>console.log(err))
//   }
// },[location.woeid])
  
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
