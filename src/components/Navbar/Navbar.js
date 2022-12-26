import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav_bar'>
            <div className="container">
                <div className="main">
                        <ul>
                            <li><a href="#Home">Home</a></li>
                            <li><a href="#About">About</a></li>
                            <li><a href="#Services">Services</a></li>
                            <li><a href="#Contact">Contact</a></li>
                        </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;