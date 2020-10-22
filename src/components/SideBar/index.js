import React from 'react'

import icons from '../MainContent/wheaterIcons'
import dateFormat from '../../utils/dateFormat'
import celciusToFahren from '../../utils/celciusToFahren'

export default function SideBar({wheater,location,typeTemp}) {
    let icon=icons.find(icon=>icon.name===wheater.weather_state_name)
    return (
        <div className="container mx-auto px-5">
            <div className="grid grid-cols place-content-center lg:place-content-around text-center py-5 text-white h-600 lg:h-900" >
                <img src={icon.img_url} alt="clear"/>
                <div className="text-6xl">
                    {typeTemp==='f' 
                        ? `${celciusToFahren(wheater.the_temp.toFixed(0))} °F` 
                        : `${wheater.the_temp.toFixed(0)} °C`
                    }
                </div>
                <div className="text-2xl">
                    {wheater.weather_state_name}
                </div>
                <div className="flex flex-col items-center text-1xl font-light capitalize text-white">
                    <div>Today . {dateFormat(new Date())}</div>
                    <div>
                        {location.title}
                    </div>
                </div>
            </div>
            
        </div>
    )
}
