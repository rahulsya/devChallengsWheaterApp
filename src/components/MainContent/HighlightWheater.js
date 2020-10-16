import React from 'react'

export default function HighlightWheater() {
    return (
        <div>
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
