import React from 'react';
import './header.css'
const Header = () => {
    return (
        <div className="main-container">
            <nav className="nav-container">
                <a href="/Home">Home</a>
                <a href="/About">About</a>
                <a href="/Contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;