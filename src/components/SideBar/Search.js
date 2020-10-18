import React from 'react'
import Button from '../Button'

import {WheaterContext} from '../../context/wheater-context'
import {getCurrentLocation} from '../../context/action'

export default function Search({
    activeSearch,
    setActiveSearch,
    handleSubmit,
    handleChange,
    keyword,
    wheaterResults}) {

    const {dispatch}=React.useContext(WheaterContext)
    return (
            <div className="container mx-auto px-5 text-white">
                <div className="text-left mt-5">
                    <button onClick={()=>setActiveSearch(!activeSearch)}>X</button>
                </div>
                    <form className="flex flex-row mt-8" onSubmit={handleSubmit}>
                        <input type="text"
                        name="keyword"
                        className="py-3 px-2 mr-2 w-full bg-transparent border border-white"
                        placeholder="london"
                        value={keyword}
                        onChange={handleChange}/>
                        <Button bgColor="blue-600" borderRadius="none">Search</Button>
                    </form>
                <div className="flex flex-col items-center mt-5">
                    {wheaterResults.length < 1 && <div className="text-2xl">No Result</div> }
                    {wheaterResults.map((item,index)=>{
                       return (
                        <div key={index} 
                        className="py-3 px-2 w-full 
                        hover:text-gray-600
                        border-2 border-white 
                        text-2xl mt-3
                        cursor-pointer
                        "
                        onClick={()=>dispatch(getCurrentLocation(item))}
                        >
                            {item.title}
                        </div>
                       )
                    })}
                </div>
            </div>
    )
}
