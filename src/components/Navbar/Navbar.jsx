import React, { useState } from "react";
import "./Navbar.css";

// Import SVG icons
import PersonIcon from "../../assets/person.svg";
import ContactIcon from "../../assets/envelope-close.svg";
import ContactHoverIcon from "../../assets/envelope-open.svg";
import ExperienceIcon from "../../assets/experience.svg";
import HobbiesIcon from "../../assets/hobbies.svg";
import ProjectsIcon from "../../assets/projects.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
          <a href="/about">
            <img src={PersonIcon} alt="About" />
          </a>
        </li>
        <li className="menu-item">
          <a href="/contact">
            <img
              src={isHovered ? ContactHoverIcon : ContactIcon}
              alt="Contact"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </a>
        </li>
        <li className="menu-item">
          <a href="/experience">
            <img src={ExperienceIcon} alt="Experience" />
          </a>
        </li>
        <li className="menu-item">
          <a href="/hobbies">
            <img src={HobbiesIcon} alt="Hobbies" />
          </a>
        </li>
        <li className="menu-item">
          <a href="/projects">
            <img src={ProjectsIcon} alt="Projects" />
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
