import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-cyan-400 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-3xl font-bold font-cyberpunk tracking-widest">
          CYBER<span className="text-yellow-400">PORT</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-lg">
          <li>
            <a href="#home" className="hover:text-yellow-400 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-400 transition duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 transition duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
