import React, { useEffect, useState } from 'react'
import JobPostingService from '../services/jobPostingService'
import JobPositionService from '../services/jobPositionService'
import { Dropdown } from 'semantic-ui-react';

export default function SearchBox() {

    let jobPostingService= new JobPostingService();

    const [jobPositions, setJobPositions] = useState([])

    useEffect(()=>{
        let jobPositionService= new JobPositionService();

        jobPositionService.getJobPositions().then(result=>setJobPositions(result.data.data))
    },[])

    const jobPositionOption = jobPositions.map((jobPosition, index) => ({
        key: index,
        text: jobPosition.jobPosition,
        value: jobPosition.id,
    }));




    return (
        <div>
           <Dropdown placeholder='İş pozisyonu' search selection options={jobPositionOption} />
        </div>
    )
}
