import React, { useEffect, useState } from 'react'
import SchoolService from '../services/schoolService'
import { Card } from 'semantic-ui-react'

export default function SchoolList() {
    const [schools, setSchools] = useState([])

    useEffect(()=>{
        let schoolService= new SchoolService();
        schoolService.getSchools().then(result=>setSchools(result.data.data))
    })
    return (
        <div>
             {schools.map(school => (
                    <Card fluid color="red">
                        {/* <Card.Content>
                       //image
                   </Card.Content> */}
                        <Card.Description>
                            <Card fluid style={{ marginTop: "1em" }} color="red">
                                <Card.Content header="Kişisel Bilgiler" />
                                <Card.Content> <b> Üniversite Adı :</b> {school.schoolName?.schoolName}</Card.Content>
                                <Card.Content> <b> Bölüm :</b> {school.department?.departmentName}</Card.Content>
                            </Card>
                        </Card.Description>
                    </Card>
                ))}
        </div>
    )
}
