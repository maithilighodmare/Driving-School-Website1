import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white w-full">
      <div className="container">
        <h1 className="text-2xl font-bold">Dreevex</h1>

        <button 
          className="lg:hidden block text-white" 
          onClick={toggleMenu}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>

        <nav className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#courses" className="hover:underline">Courses</a>
          <a href="#contact" className="hover:underline">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
