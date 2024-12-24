import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <nav className="navbar">
      <div className="logo">
         <img src="../public/assets/logo.png" alt="Logo" className="logo-image" /> {/* Add logo image here */}
      DDS
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
        <li><a href="#courses" onClick={toggleMenu}>Courses</a></li>
        <li><a href="#blog" onClick={toggleMenu}>Blog</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
     
        {/* Login and Signup Buttons */}
        <li className="nav-item ">
        <Link to="/login" className="btn btn-login" onClick={toggleMenu}>Login</Link>
        </li>
        <li className="nav-item ">
        <Link to="/signup" className="btn btn-signup" onClick={toggleMenu}>Sign Up</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
