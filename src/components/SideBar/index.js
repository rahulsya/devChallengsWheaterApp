import React from 'react'
import {MdGpsFixed} from 'react-icons/md'

import icons from '../MainContent/wheaterIcons'
import dateFormat from '../../utils/dateFormat'

import Button from '../Button'
import Search from './Search'

import {getBySearch} from '../../api/getApiWheater'

export default function SideBar({wheater,location}) {
    let icon=icons.find(icon=>icon.name===wheater.weather_state_name)
    const [activeSearch,setActiveSearch]=React.useState(false)
    const [keyword,setKeyword]=React.useState("")
    // store the result search wheater
    const [results,setResults]=React.useState([])

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
    
    if (activeSearch===true) {
        return (
            <Search 
            value={keyword}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            activeSearch={activeSearch}
            setActiveSearch={setActiveSearch}
            wheaterResults={results}
            />
        )
    }
    return (
        <div className="container mx-auto px-5">
            {/* search place */}
            <div className="flex justify-between items-center mt-5">
                <Button onClick={()=>setActiveSearch(!activeSearch)}>
                    Search for places
                </Button>
                <Button borderRadius="full">
                    <MdGpsFixed/>
                </Button>
            </div>
            <div className="grid grid-cols gap-4 md:gap-12 lg:gap-32 place-content-center text-center py-5  text-white ">
                <img src={icon.img_url} alt="clear" className="mt-5"/>
                <div className="text-6xl mt-5">
                    {wheater.the_temp.toFixed(0)} °c
                </div>
                <div className="text-2xl mt-12">
                    {wheater.weather_state_name}
                </div>
                <div className="flex flex-col items-center text-1xl font-light capitalize text-w">
                    <div>Today . {dateFormat(new Date())}</div>
                    <div>
                        {location.title}
                    </div>
                </div>
            </div>
            
        </div>
    )
}
