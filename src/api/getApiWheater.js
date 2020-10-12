import Axios from 'axios'

const CORS_URL='https://cors-anywhere.herokuapp.com'
const BASE_URL='https://www.metaweather.com/api/location'

export const getBylocation=(lat,long)=>{
    return Axios.get(`${CORS_URL}/${BASE_URL}/search/?lattlong=${lat} ,${long}`)
}

export const getByLocationId=(id)=>{
    return Axios.get(`${CORS_URL}/${BASE_URL}/${id}`)
}

export const getBySearch=(keyword)=>{
    return Axios.get(`${CORS_URL}/${BASE_URL}/seacrh/?query=${keyword}`)
}