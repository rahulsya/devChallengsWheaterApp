import Axios from 'axios'

const CORS_URL='https://cors-anywhere.herokuapp.com'
const BASE_URL='https://www.metaweather.com/api/location'

export const getBylocation=async (lat,long)=>{
    return await Axios.get(`${CORS_URL}/${BASE_URL}/search/?lattlong=${lat},${long}`)
}

export const getByLocationId=async (id)=>{
    return await Axios.get(`${CORS_URL}/${BASE_URL}/${id}`)
}

export const getBySearch=(keyword)=>{
    return Axios.get(`${CORS_URL}/${BASE_URL}/search/?query=${keyword}`)
}