import {GET_LOCATION,GET_DAILY_WHEATER,SET_TEMPERATURE} from './constant'
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
export const convertTempreature=(tempType)=>{
    return{
        type:SET_TEMPERATURE,
        payload:tempType
    }
}
