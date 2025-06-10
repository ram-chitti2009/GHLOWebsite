import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../src/index.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-teal-500 p-4 flex items-center justify-between relative w-full rounded-full hover:shadow-xl hover:shadow-teal-300/50 transition-shadow duration-300">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/AssetsCode/GHLO Branding (4) (1).png"
            alt="GHLO Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full mr-4" // increase mr-2 to mr-4 or more
          />
        </Link>
        <span className=" mr-4 text-white font-bold text-lg sm:text-2xl ml-2">
          GHLO
        </span>
      </div>
      <ul className="hidden md:flex space-x-4 lg:space-x-12 text-white text-base sm:text-lg">
        <li className="hover:translate-y-[-3px] transition-transform duration-200">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:translate-y-[-3px] transition-transform duration-200">
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="hover:translate-y-[-3px] transition-transform duration-200">
          <Link to="/our-initiatives">Our Initiatives</Link>
        </li>
        <li className="hover:translate-y-[-3px] transition-transform duration-200">
          <Link to="/our-team">Our Team</Link>
        </li>
        
        <li className="hover:translate-y-[-3px] transition-transform duration-200">
          <Link to="/start-chapter"> Start a Chapter</Link>
        </li>
        <li className="hover:translate-y-[-3px] transition-transform duration-200">
          <Link to="/donate"> Donate</Link>
        </li>
        <li className="hover:translate-y-[-3px] transition-transform duration-200">
          <Link to="/blog"> Blog</Link>
        </li>
      </ul>
      <button
        className="md:hidden text-white focus:outline-none ml-4"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-pink-500 flex flex-col items-center space-y-4 py-4 z-50 md:hidden">
          <li className="hover:translate-y-[-3px] transition-transform duration-200">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="hover:translate-y-[-3px] transition-transform duration-200">
            <Link to="/about-us" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>

          <li className="hover:translate-y-[-3px] transition-transform duration-200">
            <Link to="/our-initiatives" onClick={() => setMenuOpen(false)}>
              Our Initiatives
            </Link>
          </li>
          <li className="hover:translate-y-[-3px] transition-transform duration-200">
            <Link to="/our-team" onClick={() => setMenuOpen(false)}>
              Our Team
            </Link>
          </li>
          <li className="hover:translate-y-[-3px] transition-transform duration-200">
            <Link to="/contact-us" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
          <li className="hover:translate-y-[-3px] transition-transform duration-200">
            <Link to="/start-chapter" onClick={() => setMenuOpen(false)}>
              Start a Chapter
            </Link>
          </li>
          <li className="hover:translate-y-[-3px] transition-transform duration-200">
            <Link to="/donate" onClick={() => setMenuOpen(false)}>
              Donate
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
