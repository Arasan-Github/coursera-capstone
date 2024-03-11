import React, { useState } from "react";
import logo from "../Images/Logo .svg";
import { Link } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Service</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <Link to="/booking">Reserve table</Link>
        </li>
        <li>
          <a href="/">Order Online</a>
        </li>
        <li>
          <a href="/">login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
