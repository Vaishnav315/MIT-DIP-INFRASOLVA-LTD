// src/components/Header/Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="left">
          <button
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="nav desktop-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about-us">About Us</Link>
          <div className="nav-dropdown">
            <a className="nav-link" href="#services">Services ▾</a>
            <div className="dropdown-menu">
              <a href="#services" className="dropdown-item">Architectural Intelligence</a>
              <a href="#services" className="dropdown-item">Structural Engineering</a>
              <a href="#services" className="dropdown-item">Retrofitting & Rehab</a>
              <a href="#services" className="dropdown-item">Structural Health Monitoring</a>
            </div>
          </div>
          <a className="nav-link" href="#why">Why Us</a>
          <Link className="nav-link" to="/team">Team</Link>
          <a className="nav-link" href="#project">Project</a>
          <a className="nav-link" href="#product">Product</a>
          <a className="nav-link" href="#blog">Blog</a>
        </nav>

        {/* Mobile Nav Overlay */}
        <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <Link className="mobile-link" to="/" onClick={toggleMenu}>Home</Link>
            <Link className="mobile-link" to="/about-us" onClick={toggleMenu}>About Us</Link>
            <a className="mobile-link" href="#services" onClick={toggleMenu}>Services</a>
            <a className="mobile-link" href="#why" onClick={toggleMenu}>Why Us</a>
            <Link className="mobile-link" to="/team" onClick={toggleMenu}>Team</Link>
            <a className="mobile-link" href="#project" onClick={toggleMenu}>Project</a>
            <a className="mobile-link" href="#product" onClick={toggleMenu}>Product</a>
            <a className="mobile-link" href="#blog" onClick={toggleMenu}>Blog</a>
            <Link className="mobile-link highlight" to="/contact-us" onClick={toggleMenu}>Contact Us</Link>
          </div>
        </div>

        <div className="right">
          <Link className="contact-pill" to="/contact-us">☎ Contact us</Link>
        </div>
      </div>
    </header>
  );
}