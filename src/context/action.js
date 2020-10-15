import {GET_LOCATION,GET_DAILY_WHEATER} from './constant'

export const getCurrentLocation=(data)=>{
    return{
        type:GET_LOCATION,
        data
    }
}

export const getDailyWheater=(data)=>{
    return{
        type:GET_DAILY_WHEATER,
        data
    }
}