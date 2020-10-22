import React from 'react'
import icons from './wheaterIcons'

import Button from '../Button'

import HighlightWheater from './HighlightWheater'
import dateFormat from '../../utils/dateFormat'

import {convertTempreature} from '../../context/action'
import celciusToFahren from '../../utils/celciusToFahren'

export default function MainContent({wheaterItems,typeTemp,dispatch}) {
    const [wheaterItem,...wheaterItemss]=wheaterItems

    let [currentWheater,setCurrentWheater]=React.useState(wheaterItem)
    return (
        <div className="container mx-auto px-3 lg:px-5 text-white">

            <div className="mt-5 flex justify-end items-center">
                <div className="px-5">
                <Button 
                onClick={()=>dispatch(convertTempreature('c'))}
                bgColor={`${typeTemp==='c' ? 'gray-100' :'gray-600'}`} 
                color={`${typeTemp==='c' ? 'gray-800' :''}`} 
                borderRadius="full">C</Button>
                </div>
                <Button 
                onClick={()=>dispatch(convertTempreature('f'))}
                bgColor={`${typeTemp==='f' ? 'gray-100' :'gray-600'}`}
                color={`${typeTemp==='f' ? 'gray-800' :''}`} 
                className="pl-4" 
                borderRadius="full">F</Button>
            </div>

            <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-2 lg:gap-4">
                {wheaterItemss.map((wheaterItem,index)=>{
                    let icon=icons.find(icon=>icon.name===wheaterItem.weather_state_name)
                    return (
                        <div 
                        key={index} 
                        className={`py-4 px-3 flex flex-col 
                        justify-between
                        ${currentWheater===wheaterItem ?`bg-blue-900` : `bg-liteBlue`}
                        w-full h-56 
                        cursor-pointer
                        hover:bg-opacity-50
                        transition duration-300`} 
                        onClick={()=>setCurrentWheater(wheaterItem)}>
                            
                            <div className="self-center capitalize">
                                {index===0 ? 'Tomorrow' : dateFormat(wheaterItem.applicable_date)}
                            </div>
                            <img 
                            src={icon.img_url}
                            alt={`wheater ${index}`} 
                            className="w-32 self-center" />
                            <div className="flex justify-between px-5">
                                <div>
                                    {typeTemp==='f' 
                                    ? `${celciusToFahren(wheaterItem.max_temp.toFixed(0))} °F` 
                                    : `${wheaterItem.max_temp.toFixed(0)} °C`}
                                </div>
                                <div className="text-gray-600">
                                {typeTemp==='f' 
                                    ? `${celciusToFahren(wheaterItem.min_temp.toFixed(0))} °F` 
                                    : `${wheaterItem.min_temp.toFixed(0)} °C`}
                                </div>
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
