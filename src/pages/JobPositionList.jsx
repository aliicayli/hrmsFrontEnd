import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import JobPositionService from '../services/jobPositionService'

export default function JobPositionList() {
    const [positions, setPositions] = useState([])
    
    useEffect(()=>{
        let jobPositionService= new JobPositionService()
        jobPositionService.getJobPositions().then(result=> setPositions(result.data.data))
    },[])

    return (
        <div>
             <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        positions.map(position => (
                            <Table.Row>
                                <Table.Cell>{position.positionName}</Table.Cell>
                            </Table.Row>
                        ))}

                </Table.Body>
            </Table>
        </div>
        
    )
}
