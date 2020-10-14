import React from 'react'
import Thunderstrom from '../../assets/images/Thunderstorm.png'

import Button from '../Button'
export default function MainContent({data}) {
    return (
        <div className="container mx-auto px-3 lg:px-5 text-white">
            <div className="mt-5 flex justify-end items-center">
                <div className="px-5">
                    <Button bgColor="gray-100" color="gray-800" borderRadius="full">C</Button>
                </div>
                <Button className="pl-4" borderRadius="full">F</Button>
            </div>
            <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-2 lg:gap-4">
                <div className="py-4 px-3 flex flex-col bg-liteBlue w-full">
                    <div className="self-center">Tumorrow</div>
                    <img src={Thunderstrom} alt="thuderStrom" className="w-32 self-center" />
                    <div className="flex justify-between px-5">
                        <div>15°C</div>
                        <div>11°C</div>
                    </div>
                </div>
            </div>
            {/* today highlight */}
            <div className="text-5xl font-semibold mt-5">
                Today's Highlight
            </div>
            <div className="mt-5 mb-12">
                <div className="grid grid-cols lg:grid-cols-2 gap-4 place-items-center">
                    <div className="px-5 py-3 bg-liteBlue w-full lg:h-64">
                        <div className="flex flex-col items-center">
                            <div className="text-3xl ">Wind Status</div>
                            <div className="text-4xl lg:text-6xl font-semibold">7 mph</div>
                            <div className="text-3xl ">WSW</div>
                        </div>
                    </div>
                    <div className="px-5 py-3 bg-liteBlue w-full lg:h-64">
                        <div className="flex flex-col justify-center">
                            <div className="text-3xl self-center">Humidity</div>
                            <div className="text-4xl lg:text-6xl font-semibold self-center">84 %</div>
                            <div className="flex flex-col lg:px-16">
                                <div className="flex flex-row justify-between ">
                                    <div>01</div>
                                    <div>50</div>
                                    <div>100</div>
                                </div>
                                <div className="">
                                    <div className="rounded-md bg-gray-500 h-4 w-full"></div>
                                    <div className="rounded-md bg-yellow-500 h-4 -mt-4 z-10 " style={{width:'75%'}}></div>
                                </div>
                                <div className="self-end "> % </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 py-3 bg-liteBlue w-full lg:h-64">
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-3xl ">Visibility</div>
                            <div className="text-4xl lg:text-6xl font-semibold">6,4 miles</div>
                        </div>
                    </div>
                    <div className="px-5 py-3 bg-liteBlue w-full lg:h-64">
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-3xl ">Air Pressure</div>
                            <div className="text-4xl lg:text-6xl font-semibold">988 mb</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
