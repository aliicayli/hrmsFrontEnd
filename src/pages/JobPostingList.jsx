import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import JobPostingService from '../services/jobPostingService'


export default function JobPostingList() {
    const [postings, setpostings] = useState([])

    useEffect(()=>{
        let jobPostingService= new JobPostingService()
        jobPostingService.getJobPostings().then(result=>setpostings(result.data.data))
    },[])

    return (
        <div>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
                        <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
                        <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        postings.map(posting=>(
                            <Table.Row>
                                <Table.Cell>{posting.jobPosition}</Table.Cell>
                                <Table.Cell>{posting.companyName}</Table.Cell>
                                <Table.Cell>{posting.numberOfOpenPositions}</Table.Cell>
                                <Table.Cell>{posting.applicationDeadline}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
