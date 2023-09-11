import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';  
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header__title">
                <h2 className="header__title__text">Notes</h2>
            </div>
            <div className="header__main">

            </div>
            <div className="header__auth">
                <Button className="header__auth__button" variant="light">Sign Up</Button>
                <Button className="header__auth__button" variant="light">Login</Button>
            </div>
        </div>
    )
};

export default Header;