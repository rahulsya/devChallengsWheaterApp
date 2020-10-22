import React from 'react'
import {
    GET_LOCATION,
    GET_DAILY_WHEATER,
    SET_TEMPERATURE
} from './constant'

export const WheaterContext=React.createContext()

const initalState={
    currentLocation:[],
    dailyWheater:[],
    currentTemp:'c',
}
const reducer=(state,action)=>{
    switch(action.type){
        case GET_LOCATION:
            return {
                ...state,
                currentLocation:action.data
            }
            case GET_DAILY_WHEATER:
                return{
                    ...state,
                    dailyWheater:action.data
                }
            case SET_TEMPERATURE :
                return{
                    ...state,
                    currentTemp:action.payload
                }
        default:return state
    }
}

export const WheaterContextProvider=({children})=>{
    const [state,dispatch]=React.useReducer(reducer,initalState)
    return (
        <WheaterContext.Provider value={{state,dispatch}}>
            {children}
        </WheaterContext.Provider>
    )
}