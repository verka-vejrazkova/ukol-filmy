import React from 'react';
import './style.css';


const Header = ({camera}) => {

    return (
        <header className="header">
        <h1>
        <img class="logo" src={camera} alt="Logo" />
        V našem kině právě uvádíme
        </h1>
        </header>
    );

}

export default Header;