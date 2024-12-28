import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="navbar fixed-navbar">
      <div className="logo">
        <img src="../public/assets/logo.png" alt="Logo" className="logo-image" />
        DDS
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={() => { toggleMenu(); handleScroll('home'); }}>Home</a></li>
        <li><a href="#Trainer" onClick={() => { toggleMenu(); handleScroll('trainer'); }}>About Us</a></li>
        <li><a href="#Courses" onClick={() => { toggleMenu(); handleScroll('courses'); }}>Courses</a></li>
        <li><a href="#Gallery" onClick={() => { toggleMenu(); handleScroll('Gallery'); }}>Gallery</a></li>
        <li><a href="#contact" onClick={() => { toggleMenu(); handleScroll('contact'); }}>Contact Us</a></li>

        {/* Login and Signup Buttons */}
        <li className="nav-item">
          <Link to="/login" className="btn btn-login" onClick={toggleMenu}>Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="btn btn-signup" onClick={toggleMenu}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
