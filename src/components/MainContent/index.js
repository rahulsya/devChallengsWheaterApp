import React from 'react'
import icons from './wheaterIcons'

import Button from '../Button'

import HighlightWheater from './HighlightWheater'
import dateFormat from '../../utils/dateFormat'

export default function MainContent({wheaterItems}) {
    const [wheaterItem,...wheaterItemss]=wheaterItems

    let [currentWheater,setCurrentWheater]=React.useState(wheaterItem)
    return (
        <div className="container mx-auto px-3 lg:px-5 text-white">
            <div className="mt-5 flex justify-end items-center">
                <div className="px-5">
                    <Button bgColor="gray-100" color="gray-800" borderRadius="full">C</Button>
                </div>
                <Button className="pl-4" borderRadius="full">F</Button>
            </div>
            <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-2 lg:gap-4">
                {wheaterItemss.map((wheaterItem,index)=>{
                    let icon=icons.find(icon=>icon.name===wheaterItem.weather_state_name)
                    return (
                        <div 
                        key={index} 
                        className="py-4 px-3 flex flex-col bg-liteBlue w-full 
                        cursor-pointer
                        hover:bg-opacity-50
                        transition duration-300" 
                        onClick={()=>setCurrentWheater(wheaterItem)}>
                            
                            <div className="self-center capitalize">
                                {index===0 ? 'Tomorrow' : dateFormat(wheaterItem.applicable_date)}
                            </div>
                            <img 
                            src={icon.img_url}
                            alt={`wheater ${index}`} 
                            className="w-32 self-center" />
                            <div className="flex justify-between px-5">
                                <div>{wheaterItem.max_temp.toString().split('.')[0]} °C</div>
                                <div className="text-gray-600">{wheaterItem.min_temp.toString().split('.')[0]} °C</div>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
            {/* today highlight */}
            <HighlightWheater currentWheater={currentWheater}/>
        </div>
    )
}
