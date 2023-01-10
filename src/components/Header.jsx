import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {


    return (
        <>
            <nav className="main-nav">
                <div className="container">
                    <img src="/images/logo.png" alt="NewsLogo" className='logo' />
                    <div className="social-icon">
                        <NavLink href="http://facebook.com"><i className="fab fa-facebook fa-2x"></i></NavLink>
                        <NavLink href="http://twitter.com"><i className="fab fa-twitter fa-2x"></i></NavLink>
                        <NavLink href="http://instagram.com"><i className="fab fa-instagram fa-2x"></i></NavLink>
                        <NavLink href="http://youtube.com"><i className="fab fa-youtube fa-2x"></i></NavLink>
                    </div>
                    <ul>
                        <li><NavLink to={'/'} className="link current">Home</NavLink></li>
                        <li><NavLink to={'/about'} className="link">About</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;
