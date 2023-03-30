import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='navbar'>
            <h2>Everything about AI</h2>
            <div>
                <a href="/home">Home</a>
                <a href="/about">About us</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;