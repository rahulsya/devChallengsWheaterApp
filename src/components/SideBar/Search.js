import React from 'react'

export default function Search({activeSearch,setActiveSearch}) {
    return (
            <div className="container mx-auto px-5 text-white">
                <div className="text-left mt-5">
                    <button onClick={()=>setActiveSearch(!activeSearch)}>X</button>
                </div>
                <div className="flex flex-row mt-8">
                    <input type="text"
                    className="py-3 px-2 mr-2 w-full bg-transparent border border-white"/>
                    <Button bgColor="blue-600" borderRadius="none">Search</Button>
                </div>
                <div className="flex flex-col items-center mt-5">
                    <div className="py-3 px-2 w-full hover:text-red-500 border-2 border-white text-2xl">
                        London
                    </div>
                </div>
            </div>
    )
}
