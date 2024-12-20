import React, { useState } from 'react';
import './Navbar_2.css';

const Navbar_2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle the state
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar-2">
      {/* Logo */}
      <div className="logo">
        <h2>MY SITE</h2>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        <li>
          <a href="/" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="/about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="/projects" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="/hobbies" onClick={closeMenu}>
            Hobbies
          </a>
        </li>
        <li>
          <a href="/contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar_2;
