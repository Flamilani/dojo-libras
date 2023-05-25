import React from 'react';
import './style.css';
import logo from '../../assets/imgs/logo.png';

function Header() {
    return (
        <>                
        <header className="header">
            <img className="logo" src={logo} alt="Logo Dojo de Libras" />
        </header>
        </>
    )
}

export default Header; 