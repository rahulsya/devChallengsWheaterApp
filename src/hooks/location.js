import React from 'react'

export default function useLocation() {
    const [latitude,setLatitude]=React.useState("")
    const [longitude,setLongitude]=React.useState("")

    React.useEffect(()=>{
        console.log('call location');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position=>{
                    setLatitude(position.coords.latitude)
                    setLongitude(position.coords.longitude)
                }),
                (error=>{
                    console.log(error.message);
                })
            )
        }else{
            console.log("gagal mendapatkan lokasi");
        }
    },[latitude,longitude])

    
    return{
        latitude,
        longitude
    }
}
