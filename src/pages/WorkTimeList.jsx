import React, { useEffect, useState } from 'react'
import WorkTypeService from '../services/workTypeService'

export default function WorkTimeList() {

    const [workTimes, setWorkTimes] = useState([])

    useEffect(()=>{
        let workTimeService= new WorkTypeService()
        workTimeService.getWorkTypes().then(result=>setWorkTimes(result.data.data))
    },[])

    return (
        <div>
            
        </div>
    )
}
