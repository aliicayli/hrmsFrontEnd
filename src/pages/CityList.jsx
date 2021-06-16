import React, { useEffect, useState } from 'react'
import CityService from '../services/cityService'

export default function CityList() {

    const [city, setCity] = useStatete([])

    useEffect(()=>{
        let cityService=new CityService()
        cityService.getCities().then(result=>setCity(result.data.data))
    },[])

    return (
        <div>
            
        </div>
    )
}
