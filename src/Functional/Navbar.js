import { useState } from 'react'
import { Navbar as Navbarr } from '../Presentational/Navbar.jsx'
import { Localization } from '../Localization/Localization.js'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage navbar visibility

    const toggleNavbar = () => {
        setIsOpen(!isOpen); // Toggle the state
    };

    const NavTabs = Localization.NavTabs;

    return <Navbarr toggleNavbar={toggleNavbar} NavTabs={NavTabs} isOpen={isOpen} />

}

export default Navbar;