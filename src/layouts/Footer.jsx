import React from 'react'
import "../Css/Footer.css"
import { Button } from 'semantic-ui-react'
import { Form, TextArea } from 'semantic-ui-react'
import { Grid, Image, Segment, Header } from 'semantic-ui-react'


export default function Footer() {
    return (
        <div>
            <div className="footer">

                <Grid stackable columns={2}>
                    <Grid.Column width={4}>
                        <br />
                        <br />
                        <Header inverted as="h8" content="İş" />

                    </Grid.Column>
                    <Grid.Column width={12}>
                        Sosyal Medya Hesaplarımız
                        <br />
                        <br />
                        <Button circular color="facebook" icon="facebook" />

                        <Button circular color="twitter" icon="twitter" />

                        <Button circular color="linkedin" icon="linkedin" />

                        <Button circular color="google plus" icon="google plus" />
                    </Grid.Column>
                    
                </Grid>
            </div>

        </div>
    )
}
