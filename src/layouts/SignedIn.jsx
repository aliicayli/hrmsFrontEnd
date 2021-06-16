import React from 'react'
import { Dropdown, Menu , Image} from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced ="right" src="https://2.bp.blogspot.com/-gAR06gOY28U/WwJ7vBShaFI/AAAAAAAA1QQ/-bsCsKajsr4fG6S5IllMFMNayLOOow1dQCLcBGAs/s1600/user-150.png"/>
                <Dropdown pointing="top right" text="Ali">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
