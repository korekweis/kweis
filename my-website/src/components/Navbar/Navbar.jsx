import React from 'react';
import { FaBars } from 'react-icons/fa'; //this should be (slash)/first two letters of the icon
import { Nav, 
        NavbarContainer, 
        NavLogo, 
        MobileIcon, 
        NavMenu, 
        NavItem,  
        NavLinks, 
        TempNav
    } from './NavbarElements';

function Navbar({ mobileNavToggle }) {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    Kweis
                </NavLogo>
                <MobileIcon onClick={ mobileNavToggle }>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="resume">Resume</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects">Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contactMe">Contact Me</NavLinks>
                    </NavItem>
                </NavMenu>
                <TempNav></TempNav>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar