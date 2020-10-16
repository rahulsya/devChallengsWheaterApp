import React from 'react'
import HighlightWheater from './HighlightWheater'
import Thunderstrom from '../../assets/images/Thunderstorm.png'

import Button from '../Button'
export default function MainContent({wheaterItems}) {
    const [wheaterItem,...wheaterItemss]=wheaterItems
    // const [currentHighlight,setCurrentHighlight]=React.useState(wheaterItem)
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
                    console.log(wheaterItem.weather_state_name.split(' ').join(''));
                    return (
                        <div key={index} className="py-4 px-3 flex flex-col bg-liteBlue w-full">
                            <div className="self-center">Tumorrow</div>
                            <img 
                            src={Thunderstrom}
                            alt={`wheater ${index}`} 
                            className="w-32 self-center" />
                            <div className="flex justify-between px-5">
                                <div>{wheaterItem.max_temp.toString().split('.')[0]} °C</div>
                                <div>{wheaterItem.min_temp.toString().split('.')[0]} °C</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* today highlight */}
            <HighlightWheater />
        </div>
    )
}
