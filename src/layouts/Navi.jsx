import React from 'react'
import { Button, Container, Dropdown, Menu, Icon } from 'semantic-ui-react'


export default function Navi() {
    return (
        <div> 
            <Menu inverted fixed="top" size='large'>
            <Container>
                <Menu.Item name="briefcase">
                    <Icon name="briefcase" size="large" />
                   iş
               </Menu.Item>

                <Menu.Item name="Ana Sayfa" />
                <Menu.Item name="Kurumsal" />
                <Menu.Item name="Destek Merkezi" />

                <Menu.Menu position='right'>
                    <Button.Group>
                        <Button>Giriş yap</Button>
                        <Button color="blue">Üye ol</Button>
                    </Button.Group>

                </Menu.Menu>
            </Container>

        </Menu>
        </div>
    )
}
