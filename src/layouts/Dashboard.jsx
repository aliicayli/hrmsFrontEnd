import React from 'react'
import { Route } from 'react-router-dom'
import { Sidebar } from 'semantic-ui-react'
import { Grid} from 'semantic-ui-react'
import EmployerList from '../pages/EmployerList'
import SideBar from './SideBar'
import AddJobPosting from '../pages/AddJobPosting'




export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <SideBar/>
                    </Grid.Column>
                    <Grid.Column width={12} style={{paddingLeft:"2em"}}>
                        <Route exact path="/employer" component={EmployerList} />
                        <Route exact path="/addjobposting" component={AddJobPosting} /> 
                    </Grid.Column>            
                </Grid.Row>
            </Grid>    
        </div>
    )
}
