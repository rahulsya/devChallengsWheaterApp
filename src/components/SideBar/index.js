import React from 'react'

import icons from '../MainContent/wheaterIcons'
import dateFormat from '../../utils/dateFormat'

export default function SideBar({wheater,location}) {
    let icon=icons.find(icon=>icon.name===wheater.weather_state_name)
    return (
        <div className="container mx-auto px-5">
            <div className="grid grid-cols gap-4 md:gap-12 lg:gap-32 place-content-center text-center py-5  text-white ">
                <img src={icon.img_url} alt="clear" className="mt-5"/>
                <div className="text-6xl mt-5">
                    {wheater.the_temp.toFixed(0)} °c
                </div>
                <div className="text-2xl mt-8">
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
