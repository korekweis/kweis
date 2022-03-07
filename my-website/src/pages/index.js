import React, { useState } from 'react'
import Homepage from '../components/Homepage';
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const mobileNavToggle = () => { 
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} mobileNavToggle={mobileNavToggle}/>
            <Navbar mobileNavToggle={mobileNavToggle}/>
            <Homepage />
        </>
    )
}

export default Home;