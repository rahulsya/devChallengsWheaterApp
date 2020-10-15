import React from 'react'
import {
    GET_LOCATION,
    GET_DAILY_WHEATER
} from './constant'

export const WheaterContext=React.createContext()

const initalState={
    currentLocation:[],
    dailyWheater:[],
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