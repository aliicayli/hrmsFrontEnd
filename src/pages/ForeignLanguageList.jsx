import React, { useEffect, useState } from 'react'
import ForeignLanguageService from '../services/foreignLanguageService';
import { Card } from 'semantic-ui-react'

export default function ForeignLanguageList() {
    const [foreignLanguages, setForeignLanguages] = useState([]);

    useEffect(()=>{
        let forignLanguageService= new ForeignLanguageService();
        forignLanguageService.getForeignLanguages().then(result=>setForeignLanguages(result.data.data))
    })
    return (
        <div>
            <Card.Group style={{ marginTop: "1em" }}>
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
