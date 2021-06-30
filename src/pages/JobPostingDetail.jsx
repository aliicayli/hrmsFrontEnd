import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobPostingService from "../services/jobPostingService";
import { Button, Card, Image } from 'semantic-ui-react'

import React from 'react'

export default function JobPostingDetail() {

    let { id } = useParams();

    const [jobPosting, setJobPosting] = useState({})

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getById(id).then(result => setJobPosting(result.data.data))

    }, [])

    
    return (
        <div>
            
            <Card.Group style={{ marginTop: "20px" }}>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>{jobPosting.jobPosition?.jobPosition}</Card.Header>
                        <Card.Meta>{jobPosting.employers?.companyName}</Card.Meta>
                        <Card.Description>
                           {jobPosting.jobDescription}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}

