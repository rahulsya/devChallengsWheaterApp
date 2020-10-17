import React from 'react'
import dateFormat from '../../utils/dateFormat'
export default function HighlightWheater({currentWheater}) {
    return (
        <div>
            <div className="text-5xl font-semibold mt-6 capitalize">
                {
                new Date(currentWheater.applicable_date).getDate() === new Date().getDate()
                ? `Today's`
                : dateFormat(currentWheater.applicable_date)} Highlight
            </div>
            <div className="mt-5 mb-12">
                <div className="grid grid-cols lg:grid-cols-2 gap-4 place-items-center">
                    <div className="px-5 py-3 bg-liteBlue w-full lg:h-56">
                        <div className="flex flex-col items-center">
                            <div className="text-3xl ">Wind Status</div>
                            <div className="text-4xl lg:text-6xl font-semibold">{currentWheater.wind_speed.toFixed(2)} mph</div>
                            <div className="text-3xl ">{currentWheater.wind_direction_compass}</div>
                        </div>
                    </div>
                    <div className="px-5 py-3 bg-liteBlue w-full lg:h-56">
                        <div className="flex flex-col justify-center">
                            <div className="text-3xl self-center">Humidity</div>
                            <div className="text-4xl lg:text-6xl font-semibold self-center">{currentWheater.humidity} %</div>
                            <div className="flex flex-col lg:px-16">
                                <div className="flex flex-row justify-between ">
                                    <div>01</div>
                                    <div>50</div>
                                    <div>100</div>
                                </div>
                                <div className="">
                                    <div className="rounded-md bg-gray-500 h-4 w-full"></div>
                                    <div 
                                    className="rounded-md 
                                    bg-gradient-to-r from-yellow-200 to-yellow-500 
                                    h-4 -mt-4 z-10 " style={{width:`${currentWheater.humidity}%`}}></div>
                                </div>
                                <div className="self-end "> % </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 py-3 bg-liteBlue w-full lg:h-56">
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-3xl ">Visibility</div>
                            <div className="text-4xl lg:text-6xl font-semibold">{currentWheater.visibility.toFixed(2)} miles</div>
                        </div>
                    </div>
                    <div className="px-5 py-3 bg-liteBlue w-full lg:h-56">
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-3xl ">Air Pressure</div>
                            <div className="text-4xl lg:text-6xl font-semibold">{currentWheater.air_pressure.toFixed(0)} mb</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
