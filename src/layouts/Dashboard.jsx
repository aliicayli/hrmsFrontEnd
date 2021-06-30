import React from 'react'
import { Route } from 'react-router-dom'
import { Sidebar } from 'semantic-ui-react'
import { Grid} from 'semantic-ui-react'
import EmployerList from '../pages/EmployerList'
import SideBar from './SideBar'
import AddJobPosting from '../pages/AddJobPosting'
import JobPostingList from '../pages/JobPostingList'
import JobPostingDetail from '../pages/JobPostingDetail'
import PassiveJobPosting from '../pages/PassiveJobPosting'
import ConfirmJobPosting from '../pages/ConfirmJobPosting'
import CuriculumVitaeList from '../pages/CuriculumVitaeList'
import AddCuriculumVitae from '../pages/AddCuriculumVitae'






export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <SideBar/>
                    </Grid.Column>
                    <Grid.Column width={12} style={{paddingLeft:"2em"}}>
                        <Route exact path="/" component={EmployerList} />
                        <Route exact path="/addjobposting" component={AddJobPosting} /> 
                        <Route exact path="/jobposting" component={JobPostingList} /> 
                        <Route exact path="/jobposting/:id" component={JobPostingDetail} />
                        <Route exact path="/passivepostings" component={PassiveJobPosting} />
                        <Route exact path="/confirmpostings/:id" component={ConfirmJobPosting} />
                        <Route exact path="/cv" component={CuriculumVitaeList} />
                        <Route exact path="/addcv" component={AddCuriculumVitae} />
                       
                      
                        
                        
                    </Grid.Column>            
                </Grid.Row>
            </Grid>    
        </div>
    )
}
