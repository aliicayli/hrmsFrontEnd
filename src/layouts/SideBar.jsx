import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Icon, Menu } from 'semantic-ui-react'

export default function SideBar() {
    return (
        <div>
            <Menu fixed compact icon='labeled' vertical>
                <Menu.Item
                    name='bullhorn'   >
                    <Button color="blue" style={{width:"170px"}} as={NavLink} to="/jobposting">
                        <Icon name='bullhorn' />
                        
                            İş İlanları
                        </Button>

                </Menu.Item>

                <Menu.Item
                    name='address book'
                >
                    <Button color="blue" style={{width:"170px"}}>
                        <Icon name='address book' />
                        
                         Açık Pozisyonlar
                    </Button>

                </Menu.Item>

                <Menu.Item
                    name='comments'
                >
                    <Button color="blue" style={{width:"170px"}}>
                        <Icon name='comments' />
                        
                          Neler Oluyor
                    </Button>

                </Menu.Item>
            </Menu>
        </div>
    )
}
