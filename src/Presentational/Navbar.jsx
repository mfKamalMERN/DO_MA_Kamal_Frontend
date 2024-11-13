import React from 'react';
import '../Styles/Navbar.css'; // Import your CSS file

const Navbar = (props) => {
    const { toggleNavbar, NavTabs, isOpen } = props;

    return (
        <nav>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVxEQ8iS7m8rEPuuU3rqgNtiHD6YLUXtfWw&s" alt="LIC" className="logo" />

            <ul className={`navbar ${isOpen ? 'open' : ''}`}>
                {NavTabs.map((tab, index) => (
                    <li key={index} className={tab.name === "Contact" ? 'contact' : ''}>
                        {tab.name !== "Contact" ? <a>{tab.name}</a> : <a>{tab.value.DO} <br />{tab.value.Phone}</a>}
                    </li>
                ))}
            </ul>
            <button className="toggle-button" onClick={toggleNavbar}>
                {isOpen ? 'Close' : 'Menu'} {/* Button text changes based on state */}
            </button>
        </nav>
    );
};

export { Navbar };