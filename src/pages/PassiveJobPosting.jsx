import React, { useEffect, useState } from 'react'
import JobPostingService from '../services/jobPostingService';
import { Table } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { NavLink, useParams } from 'react-router-dom';
import SystemPersonalService from '../services/systemPersonalService';



export default function PassiveJobPosting() {

    let {id}= useParams();

    const [passivePosting, setPassivePosting] = useState([]);

    useEffect(()=>{
        let jobPostingService = new JobPostingService();
        jobPostingService.getByIsActiveFalse().then(result=>setPassivePosting(result.data.data))
    },[])

    let systemPersonalService= new SystemPersonalService();

     function ConfirmPostings() {
         systemPersonalService.confirm(true,id)
     }
    

    return (
        <div>
           <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>Konum</Table.HeaderCell>
                        <Table.HeaderCell>İş Açıklaması</Table.HeaderCell>
                        <Table.HeaderCell>Onaylanma Durumu</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                       passivePosting.map((passivePosting)=>(
                            <Table.Row>
                                <Table.Cell>{passivePosting.jobPosition?.jobPosition}</Table.Cell>
                                <Table.Cell>{passivePosting.employers?.companyName}</Table.Cell>
                                <Table.Cell>{passivePosting.cityId?.cityName}</Table.Cell>
                                <Table.Cell>{passivePosting.jobDescription}</Table.Cell>
                                <Table.Cell>Pasif</Table.Cell>
                                <hr/>
                                <Button onClick={ConfirmPostings()}>Onayla</Button>
                            </Table.Row> 
                       ))
                            
                      
                    }
                </Table.Body>
           </Table>
        </div>
    )
}
