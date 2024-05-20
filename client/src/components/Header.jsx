import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <img src="logo.png" alt="Aerovators" className="logo" />
            <nav className="nav">
                <a href="#">Login</a>
                <a href="#">SignUp</a>
            </nav>
           
               </header>
    );
};

export default Header;
