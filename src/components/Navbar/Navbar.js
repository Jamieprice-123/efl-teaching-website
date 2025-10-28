// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showClassesDropdown, setShowClassesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setShowClassesDropdown(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img
                src="/images/Logo.png"
                alt="English Teacher Rose Logo"
                className="logo-image"
            />
            <span className="logo-text">English Teacher Rose</span>
          </Link>

          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <Link
                to="/"
                className={`navbar-link ${isActive('/') ? 'active' : ''}`}
                onClick={closeMenu}
            >
              Home
            </Link>
            <Link
                to="/about"
                className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
                onClick={closeMenu}
            >
              About
            </Link>

            {/* My Classes Dropdown */}
            <div
                className="navbar-dropdown"
                onMouseEnter={() => setShowClassesDropdown(true)}
                onMouseLeave={() => setShowClassesDropdown(false)}
            >
              <Link
                  to="/my-classes"
                  className={`navbar-link ${isActive('/my-classes') || isActive('/pricing') ? 'active' : ''}`}
                  onClick={closeMenu}
              >
                My Classes
                <span className="dropdown-arrow">â–¼</span>
              </Link>
              <div className={`dropdown-menu ${showClassesDropdown ? 'show' : ''}`}>
                <Link to="/my-classes" className="dropdown-item" onClick={closeMenu}>
                  Course Types
                </Link>
                <Link to="/pricing" className="dropdown-item" onClick={closeMenu}>
                  Pricing
                </Link>
              </div>
            </div>

            <Link
                to="/testimonials"
                className={`navbar-link ${isActive('/testimonials') ? 'active' : ''}`}
                onClick={closeMenu}
            >
              Testimonials
            </Link>
            <Link
                to="/teaching-materials"
                className={`navbar-link ${isActive('/teaching-materials') ? 'active' : ''}`}
                onClick={closeMenu}
            >
              Teaching Materials
            </Link>
            <Link
                to="/availability"
                className={`navbar-link ${isActive('/availability') ? 'active' : ''}`}
                onClick={closeMenu}
            >
              Availability
            </Link>
            <Link
                to="/faq"
                className={`navbar-link ${isActive('/faq') ? 'active' : ''}`}
                onClick={closeMenu}
            >
              FAQ
            </Link>
            <a
                href="https://app.learncube.com/app/classes/english-teacher-rose-980206/"
                className="navbar-link student-portal-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
            >
              Student Portal
            </a>
            <DarkModeToggle />
            <Link
                to="/contact"
                className="navbar-cta btn btn-primary"
                onClick={closeMenu}
            >
              Contact
            </Link>
          </div>

          <div className="navbar-toggle" onClick={toggleMenu}>
            <span className={`bar ${isOpen ? 'active' : ''}`}></span>
            <span className={`bar ${isOpen ? 'active' : ''}`}></span>
            <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
