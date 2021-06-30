import React, { useEffect, useState } from 'react'
import TechnologyService from '../services/technologyService'
import { Card } from 'semantic-ui-react'

export default function TechnologyList() {
    const [technologies, setTechnologies] = useState([])

    useEffect(()=>{
        let technologyService = new TechnologyService();
        technologyService.getTechnologies().then(result=>setTechnologies(result.data.data))
    })
    return (
        <div>
             {technologies.map(technology => (
                    <Card fluid color="red">
                        {/* <Card.Content>
                       //image
                   </Card.Content> */}
                        <Card.Description>
                            <Card fluid style={{ marginTop: "1em" }} color="red">
                                <Card.Content header="Kullanılan Teknolojiler" />
                                <Card.Content> <b> Teknoloji adı :</b> {technology.technologyName}</Card.Content>
                                <Card.Content> <b> Bölüm :</b> {school.department?.departmentName}</Card.Content>
                            </Card>
                        </Card.Description>
                    </Card>
                ))}
        </div>
    )
}
