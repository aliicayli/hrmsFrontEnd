import React, { useEffect, useState } from 'react'
import WorkTypeService from '../services/workTypeService'

export default function WorkTypeList() {

const [workTypes, setWorkTypes] = useState([])

useEffect(()=>{
    let workTypeService= new WorkTypeService()
    workTypeService.getWorkTypes().then(result=>setWorkTypes(result.data.data))
},[])

    return (
        <div>
            
        </div>
    )
}
