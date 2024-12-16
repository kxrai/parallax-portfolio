import React from "react";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-cyan-400 z-50 shadow-lg"
    >
      <div className="container mx-auto flex justify-center space-x-8 py-4 text-lg">
        <a href="#home" className="hover:text-yellow-400 transition duration-300">
          Home
        </a>
        <a href="#about" className="hover:text-yellow-400 transition duration-300">
          About
        </a>
        <a href="#projects" className="hover:text-yellow-400 transition duration-300">
          Projects
        </a>
        <a href="#contact" className="hover:text-yellow-400 transition duration-300">
          Contact
        </a>
      </div>
    </nav>
  );
}
