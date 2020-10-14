import React from 'react'

export const WheaterContext=React.createContext()

const initalState={
    currentLocation:["hhe"],
    dailyWheater:["daily"],
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'TEST':
            console.log(action);
            return {
                ...state,
                currentLocation:[...state.currentLocation,action.data]
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