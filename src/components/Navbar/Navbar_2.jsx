import React, { useState } from "react";
import "./Navbar_2.css";

const Navbar_2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar-2 ${menuOpen ? "open" : ""}`}>
      {/* Circular Menu Button */}
      <div className="nav2-menu-button" onClick={toggleMenu}>
        <span className="menu-icon">{menuOpen ? "✕" : "+"}</span>
      </div>

      {/* Slide-Up Full-Screen Navigation */}
      <div className="menu-overlay">
        {/* Close Button */}
        {/* <div className="close-button" onClick={toggleMenu}>
          ✕
        </div> */}

        <ul className="menu-items">
          <li>
            <span className="nav-number">01</span>
            <a href="/">Home</a>
          </li>
          <li>
            <span className="nav-number">02</span>
            <a href="/about">About</a>
          </li>
          <li>
            <span className="nav-number">03</span>
            <a href="/hobbies">Hobbies</a>
          </li>
          <li>
            <span className="nav-number">04</span>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <span className="nav-number">05</span>
            <a href="/experience">Experience</a>
          </li>
          <li>
            <span className="nav-number">06</span>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar_2;
