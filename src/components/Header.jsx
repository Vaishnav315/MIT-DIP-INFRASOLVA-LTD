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
          <Link to="/" className="site-logo">MIT-DIP</Link>
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
            <span className="nav-link services-trigger">
              Services <span className="chevron"></span>
            </span>
            <div className="dropdown-menu">
              <Link to="/services/architectural-intelligence" className="dropdown-item">Architectural Intelligence</Link>
              <Link to="/services/structural-engineering" className="dropdown-item">Structural Engineering</Link>
              <Link to="/services/retrofitting-rehab" className="dropdown-item">Retrofitting & Rehab</Link>
              <Link to="/services/structural-health-monitoring" className="dropdown-item">Structural Health Monitoring</Link>
            </div>
          </div>
          <Link className="nav-link" to="/team">Team</Link>
          <Link className="nav-link" to="/careers">Careers</Link>
          <Link className="nav-link" to="/projects">Project</Link>
          <Link className="nav-link" to="/products">Product</Link>
          <Link className="nav-link" to="/blog">Blog</Link>
        </nav>

        {/* Mobile Nav Overlay */}
        <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <Link className="mobile-link" to="/" onClick={toggleMenu}>Home</Link>
            <Link className="mobile-link" to="/about-us" onClick={toggleMenu}>About Us</Link>
            {/* Mobile Services Links Expanded for access since main link is removed */}
            <div style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span className="mobile-link" style={{ opacity: 0.7, paddingLeft: 0 }}>Services</span>
              <Link to="/services/architectural-intelligence" className="mobile-link" style={{ fontSize: '1.2rem' }} onClick={toggleMenu}>Architectural Intelligence</Link>
              <Link to="/services/structural-engineering" className="mobile-link" style={{ fontSize: '1.2rem' }} onClick={toggleMenu}>Structural Engineering</Link>
              <Link to="/services/retrofitting-rehab" className="mobile-link" style={{ fontSize: '1.2rem' }} onClick={toggleMenu}>Retrofitting & Rehab</Link>
              <Link to="/services/structural-health-monitoring" className="mobile-link" style={{ fontSize: '1.2rem' }} onClick={toggleMenu}>Structural Health Monitoring</Link>
            </div>
            <Link className="mobile-link" to="/team" onClick={toggleMenu}>Team</Link>
            <Link className="mobile-link" to="/careers" onClick={toggleMenu}>Careers</Link>
            <Link className="mobile-link" to="/projects" onClick={toggleMenu}>Project</Link>
            <Link className="mobile-link" to="/products" onClick={toggleMenu}>Product</Link>
            <Link className="mobile-link" to="/blog" onClick={toggleMenu}>Blog</Link>
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