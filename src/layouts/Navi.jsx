import React, { useState } from 'react'
import { Button, Container, Dropdown, Menu, Icon } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'


export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    function handleSignOut() {
        setIsAuthenticated(false)
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }

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
                    {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"/>:<SignedOut signIn={handleSignIn}/>}
                   
                   

                </Menu.Menu>
            </Container>

        </Menu>
        </div>
    )
}
