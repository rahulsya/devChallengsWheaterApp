import React from 'react'

export const InfoLocationConxtex=React.createContext()

export const InfoLocationContextProvider=({children})=>{
    
    const [location,setLocation]=React.useState([])

    return (
        <InfoLocationConxtex.Provider value={{location,setLocation}}>
            {children}
        </InfoLocationConxtex.Provider>
    )
}