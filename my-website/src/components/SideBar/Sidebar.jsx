import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu } from './SidebarElements'

const Sidebar = ({ isOpen, mobileNavToggle }) => {
  return (
    <SidebarContainer isOpen={ isOpen } onClick={ mobileNavToggle }> 
        <Icon onClick={ mobileNavToggle }>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={ mobileNavToggle }>
                    About
                </SidebarLink>
                <SidebarLink to="resume" onClick={ mobileNavToggle }>
                    Resume
                </SidebarLink>
                <SidebarLink to="projects" onClick={ mobileNavToggle }>
                    Projects
                </SidebarLink>
                <SidebarLink to="contactMe" onClick={ mobileNavToggle }>
                    ContactMe
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

// https://www.youtube.com/watch?v=Nl54MJDR2p8 1:14:18

export default Sidebar