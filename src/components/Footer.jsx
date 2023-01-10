import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="main-footer py-2">
            <div className="container footer-container">
                <div>
                    <img src="/images/logo_light.png" alt="NewsGrid" />
                    <p>
                        Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Delectus earum dolorem ab ipsam,
                        deserunt consectetur enim molestias
                        commodi autem sint!
                    </p>
                </div>
                <div>
                    <h3>Email Newsletter</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, voluptatem.</p>
                    <form>
                        <input type="email" placeholder='Enter Email...' />
                        <input type="submit" value="Subscribe" className='btn btn-primary' />
                    </form>
                </div>
                <div>
                    <h3>Site Links</h3>
                    <ul className="list">
                        <li>
                            <NavLink className='navlist'>Help & Support</NavLink>
                        </li>
                        <li>
                            <NavLink className='navlist'>Privacy Policy</NavLink>
                        </li>
                        <li>
                            <NavLink className='navlist'>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink className='navlist'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Join Our Club</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, illum?
                    </p>
                    <NavLink className='btn btn-secondary'>Join Now</NavLink>
                </div>
                <div>
                    <p>
                        Copyright &copy; 2023, All Rights Reserved
                    </p>
                </div>
            </div>
        </footer >
    );
}

export default Footer;
