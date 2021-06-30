import React, { useEffect, useState } from 'react'
import CurriculumVitaeService from '../services/curiculumVitaeService';
import { Segment, Card, Popup, Label } from 'semantic-ui-react';
import SchoolService from '../services/schoolService'
import TechnologyService from '../services/technologyService'
import ForeignLanguageService from '../services/foreignLanguageService';




export default function CuriculumVitaeList() {

    const [curriculumVitaes, setCurriculumVitaes] = useState([]);

    useEffect(() => {
        let curriculumVitaeService = new CurriculumVitaeService();
        curriculumVitaeService.getByJobSeekersId().then(result => setCurriculumVitaes(result.data.data))
    }, [])

    const [schools, setSchools] = useState([])

    useEffect(() => {
        let schoolService = new SchoolService();
        schoolService.getSchools().then(result => setSchools(result.data.data))
    })

    const [technologies, setTechnologies] = useState([])

    useEffect(() => {
        let technologyService = new TechnologyService();
        technologyService.getTechnologies().then(result => setTechnologies(result.data.data))
    })

    const [foreignLanguages, setForeignLanguages] = useState([]);

    useEffect(() => {
        let forignLanguageService = new ForeignLanguageService();
        forignLanguageService.getForeignLanguages().then(result => setForeignLanguages(result.data.data))
    })

    return (
        <div>
            <Card.Group style={{ marginTop: "1em" }}>
                {curriculumVitaes.map(curriculumVitae => (
                    <Card fluid color="red">
                        {/* <Card.Content>
                       //image
                   </Card.Content> */}
                        <Card.Description>
                            <Card fluid style={{ marginTop: "1em" }} color="red">
                                <Card.Content header="Kişisel Bilgiler" />
                                <Card.Content> <b> Adı :</b> {curriculumVitae.jobSeekerId?.firstName}</Card.Content>
                                <Card.Content> <b> Soyadı :</b> {curriculumVitae.jobSeekerId?.lastName}</Card.Content>
                                <Card.Content> <b> Doğum Yılı :</b> {curriculumVitae.jobSeekerId?.birthDay}</Card.Content>
                                <Card.Content> <b> Email :</b> {curriculumVitae.jobSeekerId?.epostaAddress}</Card.Content>
                            </Card>
                        </Card.Description>
                    </Card>
                ))}

                {schools.map(school => (
                    <Card fluid color="red">
                        {/* <Card.Content>
                       //image
                   </Card.Content> */}
                        <Card.Description>
                            <Card fluid style={{ marginTop: "1em" }} color="red">
                                <Card.Content header="Eğitim Bilgileri" />
                                <Card.Content> <b> Üniversite Adı :</b> {school.schoolName?.schoolName}</Card.Content>
                                <Card.Content> <b> Bölüm :</b> {school.department?.departmentName}</Card.Content>
                            </Card>
                        </Card.Description>
                    </Card>
                ))}

                {technologies.map(technology => (
                    <Card fluid color="red">
                        {/* <Card.Content>
                       //image
                   </Card.Content> */}
                        <Card.Description>
                            <Card fluid style={{ marginTop: "1em" }} color="red">
                                <Card.Content header="Kullanılan Teknolojiler" />
                                <Card.Content> <b> Teknoloji adı :</b> {technology.technologyName}</Card.Content>
                            </Card>
                        </Card.Description>
                    </Card>
                ))}

                {foreignLanguages.map(foreignLanguage => (
                    <Card fluid color="red">
                        {/* <Card.Content>
                       //image
                   </Card.Content> */}
                        <Card.Description>
                            <Card fluid style={{ marginTop: "1em" }} color="red">
                                <Card.Content header="Yabancı Dil" />
                                <Card.Content> <b> Bilinen dil :</b> {foreignLanguage.languageName}</Card.Content>
                                <Card.Content> <b> Dil Seviyesi :</b> {foreignLanguage.languageLevel}</Card.Content>
                            </Card>
                        </Card.Description>
                    </Card>
                ))}
            </Card.Group>


        </div>
    )
}
