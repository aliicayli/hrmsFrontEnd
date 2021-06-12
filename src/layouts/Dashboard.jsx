import React from 'react'
import { Sidebar } from 'semantic-ui-react'
import { Grid} from 'semantic-ui-react'
import EmployerList from '../pages/EmployerList'
import SideBar from './SideBar'



export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <SideBar/>
                    </Grid.Column>
                    <Grid.Column width={12} style={{paddingLeft:"2em"}}>
                        <EmployerList  />
                    </Grid.Column>
                    
                </Grid.Row>
            </Grid>    
        </div>
    )
}
//Changes