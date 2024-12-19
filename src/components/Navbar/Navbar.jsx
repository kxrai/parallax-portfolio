import React, { useState } from "react";
import "./Navbar.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <ul id="menu" className={isOpen ? "active" : ""}>
        {/* Circle Button */}
        <a
          className={`menu-button ${isOpen ? "icon-minus" : "icon-plus"}`}
          onClick={toggleMenu}
          href="#menu"
          title="Toggle Navigation"
        ></a>

        {/* Menu Items */}
        <li className="menu-item">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <span className="fa fa-github"></span>
          </a>
        </li>
        <li className="menu-item">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <span className="fa fa-linkedin"></span>
          </a>
        </li>
        <li className="menu-item">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <span className="fa fa-instagram"></span>
          </a>
        </li>
        <li className="menu-item">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <span className="fa fa-twitter"></span>
          </a>
        </li>
        <li className="menu-item">
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <span className="fa fa-google"></span>
          </a>
        </li>
      </ul>

      {/* Static Content Below Menu */}
      <div className="content">
        <div className="text">
          <h3>Click circle!</h3>
          <h6>Tada...!</h6>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
