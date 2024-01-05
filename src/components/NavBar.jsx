import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Login from './login/Login';
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <nav>
                    <label className="logo"><Link to="/"><img src={Logo} /></Link></label>
                <input type="checkbox" id="check" />
                    <label htmlFor="check" className="checkbtn">
                        <i className="fas fa-bars"></i>
                    </label>
                    <ul>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="/faq">FAQs</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><button onClick={toggleDrawer} >Login</button></li>
                    </ul>
            </nav>
            <Login isOpen={isOpen} toggleDrawer={toggleDrawer} />
        </>
    )
}

export default NavBar