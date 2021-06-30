import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import JobPostingService from '../services/jobPostingService'
import SystemPersonalService from '../services/systemPersonalService'
import { Card , Button} from 'semantic-ui-react'




export default function ConfirmJobPosting() {

    let {id} = useParams();

    const [passivePosting, setPassivePosting] = useState([]);

    useEffect(()=>{
        let jobPostingService= new JobPostingService();
        jobPostingService.getById(id).then(result=>setPassivePosting(result.data.data))
    },[id])

    let systemPersonalService = new SystemPersonalService();
  //  const history=  useHistory();

     function ConfirmPostings() {
       systemPersonalService.confirm(true,id)
    //  // history.push("/jobposting");
      
     }
     


    return (
        <div>
             id={id}
            <Card.Group>
                <Card>
                    <Card.Content>
                        
                        <Card.Header>{passivePosting.employers?.companyName}</Card.Header>
                        <Card.Meta>{passivePosting.employers?.websiteName}</Card.Meta>
                        <Card.Description>{passivePosting.jobPosition?.jobPosition}</Card.Description>
                    </Card.Content>

                    <Card.Content extra>
                        <div className="ui two buttons">
                             <Button onClick={ConfirmPostings()}>Onayla</Button> 
                            <Button basic color="red">Reddet</Button>
                
                        </div>
                        
                    </Card.Content>
                </Card>
            </Card.Group>
            
        </div>
    )
}
