import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import JobSeekerService from '../services/jobSeekerService'

export default function JobSeekerList() {
        const [jobSeekers, setJobSeekers] = useState([])

        useEffect(()=>{
            let jobSeekerService= new JobSeekerService()
            jobSeekerService.getJobSeekers().then(result=>setJobSeekers(result.data.data))
        },[])

    return (
        <div>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İş Arayanlar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobSeekers.map(jobSeeker=>(
                            <Table.Row>
                                <Table.Cell>{jobSeeker.firstName}</Table.Cell>
                                <Table.Cell>{jobSeeker.lastName}</Table.Cell>
                                <Table.Cell>{jobSeeker.epostaAddress}</Table.Cell>
                                <Table.Cell>{jobSeeker.birthDay}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
