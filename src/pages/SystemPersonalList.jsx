import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import SystemPersonalService from '../services/systemPersonalService'

export default function SystemPersonalList() {
    const [systemPersonals, setSystemPersonals] = useState([])

    useEffect(()=>{
        let systemPersonalService= new SystemPersonalService()
        systemPersonalService.getSystemPersonals().then(result=>setSystemPersonals(result.data.data))
    },[])

    return (
        <div>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket Çalışanları</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        systemPersonals.map(systemPersonal=>(
                            <Table.Row>
                                <Table.Cell>{systemPersonal.firstName}</Table.Cell>
                                <Table.Cell>{systemPersonal.lastName}</Table.Cell>
                                <Table.Cell>{systemPersonal.epostaAddress}</Table.Cell>
                                <Table.Cell>{systemPersonal.birthDay}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
