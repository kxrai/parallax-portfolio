import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  console.log("Navbar loaded!"); // Debug log
  const [showPortal, setShowPortal] = useState(false);

  // Scroll trigger to show the portal
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log("Scroll position:", scrollPosition); // Debug scroll position
      if (scrollPosition > 500) {
        setShowPortal(true);
      } else {
        setShowPortal(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    console.log("Show Portal:", showPortal);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <>
      {showPortal && (
        <div className="sun-portal">
          <div className="sun">☀️</div> {/* Test element */}
          <ul className="orbit">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
