import React from 'react';
import '../Styles/Navbar.css'; // Import your CSS file

const Navbar = (props) => {
    const { toggleNavbar, NavTabs, isOpen } = props;

    return (
        <nav>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVxEQ8iS7m8rEPuuU3rqgNtiHD6YLUXtfWw&s" alt="LIC" className="logo" />


            <ul className={`navbar ${isOpen ? 'open' : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li className='contact'><a href="#contact">M.A.Kamal <br /> 📞: +91 9835003820</a></li>
            </ul>
            <button className="toggle-button" onClick={toggleNavbar}>
                {isOpen ? 'Close' : 'Menu'} {/* Button text changes based on state */}
            </button>
        </nav>
    );
};

export { Navbar };