import React from 'react'
import {MdGpsFixed} from 'react-icons/md'

import Button from '../Button'

import {getBySearch,getBylocation,} from '../../api/getApiWheater'
import {WheaterContext} from '../../context/wheater-context'
import {getCurrentLocation} from '../../context/action'

import useLocation from '../../hooks/location'

export default function Search({activeSearch,setActiveSearch}) {
    const [keyword,setKeyword]=React.useState("")
    // store the result of search wheater
    const [results,setResults]=React.useState([])
    
    const {dispatch}=React.useContext(WheaterContext)

    const{longitude,latitude}=useLocation()

    const handleChange=(e)=>{
        setKeyword(e.target.value)
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        getBySearch(keyword)
        .then(response=>{
            setResults(response.data)
            setKeyword('')
        })
        .catch(err=>console.log(err.message))
    }

    const handleGetLocation=()=>{
        (async()=>{
            try {
              let response=await getBylocation(latitude,longitude)
              dispatch(getCurrentLocation(response.data[0]))
            } catch (error) {
              console.error(error.message)
            }
          })()
    }

    return (
        <div className="container mx-auto items-center px-5 mt-5 text-white">
            <div className={`flex justify-between items-center mt-5 ${activeSearch===true ? 'hidden' :''}`}>
                <Button onClick={()=>setActiveSearch(!activeSearch)}>
                    Search for places
                </Button>
                <Button
                onClick={()=>handleGetLocation()} 
                borderRadius="full">
                    <MdGpsFixed/>
                </Button>
            </div>
            
            {/* form */}
            {activeSearch && <div>
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
                    {results.length < 1 && <div className="text-2xl">No Result</div> }
                    {results.map((item,index)=>{
                       return (
                        <div key={index} 
                        className="py-3 px-2 w-full 
                        hover:text-gray-600
                        border-2 border-white 
                        text-2xl mt-3
                        cursor-pointer
                        "
                        onClick={()=>{
                            dispatch(getCurrentLocation(item)) 
                            setActiveSearch(!activeSearch)
                        }}
                        >
                            {item.title}
                        </div>
                       )
                    })}
                </div>
                </div>}
                
            
            
        </div>
    )
}
