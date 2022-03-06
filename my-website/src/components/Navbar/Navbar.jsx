import React from 'react';
import { FaBars } from 'react-icons/fa'; //this should be (slash)/first two letters of the icon
import { Nav, 
        NavbarContainer, 
        NavLogo, 
        MobileIcon, 
        NavMenu, 
        NavItem,  
        NavLinks
    } from './NavbarElements';

function Navbar() {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    Kweis
                </NavLogo>
                <MobileIcon>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar