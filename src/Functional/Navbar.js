import { useState } from 'react'
import { Navbar as Navbarr } from '../Presentational/Navbar.jsx'
import { Localization } from '../Localization/Localization.js'

const Navbar = () => {
    const [value, setValue] = useState('')

    const NavTabs = Localization.NavTabs;

    const handleChange = (e) => {
        setValue(e.target.name)
    }

    return <Navbarr handleChange={handleChange} value={value} NavTabs={NavTabs} />

}

export default Navbar;