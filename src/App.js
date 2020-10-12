import React from 'react';

// components
import SideBar from './components/SideBar'

import {getBylocation,getByLocationId} from './api/getApiWheater'
import {InfoLocationConxtex} from './context/infoLocation-context'

function App() {

  const {location,setLocation}=React.useContext(InfoLocationConxtex)
  
  React.useEffect(()=>{
    getBylocation('-6.2706','106.8849')
    .then(response=>setLocation(response.data[0]))
    .catch(err=>console.log(err.message))

    console.log('call');
  },[setLocation])


  
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-3/12 bg-liteBlue h-auto lg:h-screen">
        <SideBar/>
      </div>
      <div className="w-full bg-darkBlue h-screen">
        details
      </div>
    </div>
  );
}

export default App;
