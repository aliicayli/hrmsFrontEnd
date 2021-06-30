import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Table ,Card} from 'semantic-ui-react'
import JobPostingService from '../services/jobPostingService'


export default function JobPostingList() {
    const [postings, setPostings] = useState([])

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getByIsActiveTrue().then(result => setPostings(result.data.data))
    })

    return (
        <div>
            <Table>
                {/* <Table.Header>
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
                            <Table.Row >
                                <Table.Cell as={NavLink} to={`/jobposting/${posting.id}`}> {posting.jobPosition.jobPosition}</Table.Cell>
                                <Table.Cell>{posting.employers.companyName}</Table.Cell>
                                <Table.Cell>{posting.numberOfOpenPositions}</Table.Cell>
                                <Table.Cell>{posting.applicationDeadline}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body> */}

                <Table.Body>
                    {
                        postings.map(posting => (
                            <Card fluid color="blue" style={{ marginTop: "20px" }}    as={NavLink} to={`/jobposting/${posting.id}`}>
                                <Card.Content >
                                    <Card.Header textAlign="left">{"Pozisyon adı : " + posting?.jobPosition.jobPosition}</Card.Header>

                                    <hr />
                                    <Card.Header textAlign="left">{"Şirket adı :" + posting?.employers.companyName}</Card.Header>
                                    <Card.Description textAlign="left" content={"Konum : " + posting?.cityId.cityName} />
                                    <hr />
                                    <Card.Description textAlign="left" content={"İş açıklaması : " + posting.jobDescription} />
                                    <hr />
                                    <Card.Description textAlign="left" content={"Maaş: " + posting.minSalary + " - " + posting.maxSalary} />
                                    <Card.Description textAlign="right" content={"Tarih : " + posting.releaseDate} />
                                </Card.Content>
                            </Card>
                        ))
                    }
                </Table.Body>
            </Table>


        </div>
    )
}
