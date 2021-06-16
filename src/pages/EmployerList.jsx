import React, { useState, useEffect } from 'react'
import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react'
import EmployerService from '../services/employerService';

export default function EmployerList() {

    const [employers, setEmployers] = useState([]);

    useEffect(()=>{
        let employerService = new EmployerService()
        employerService.getEmployers().then(result=> setEmployers(result.data.data))
    },[])

    return (
        <div>
            
            <Table color="blue">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>WebSite</Table.HeaderCell>
                        <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                        <Table.HeaderCell>E-posta Adresi</Table.HeaderCell>
                        <Table.HeaderCell>Detaylar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employers.map(employer => (
                            <Table.Row>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.websiteName}</Table.Cell>
                                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                                <Table.Cell>{employer.epostaAddress}</Table.Cell>
                                <Table.Cell>
                                    <Button color="blue">
                                        Daha fazlası
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}

                </Table.Body>
            </Table>
        </div>
    )
}
