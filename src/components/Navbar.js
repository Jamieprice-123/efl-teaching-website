import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
  };

  const isActive = (path) => location.pathname === path;

  return (
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
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
            <Link
                to="/services"
                className={`navbar-link ${isActive('/services') ? 'active' : ''}`}
                onClick={closeMenu}
            >
              Services
            </Link>
            <Link
                to="/pricing"
                className={`navbar-link ${isActive('/pricing') ? 'active' : ''}`}
                onClick={closeMenu}
            >
              Pricing
            </Link>
            <Link
                to="/testimonials"
                className={`navbar-link ${isActive('/testimonials') ? 'active' : ''}`}
                onClick={closeMenu}
            >
              Testimonials
            </Link>
            <Link
                to="/blog"
                className={`navbar-link ${isActive('/blog') ? 'active' : ''}`}
                onClick={closeMenu}
            >
              Blog
            </Link>
            <Link
                to="/faq"
                className={`navbar-link ${isActive('/faq') ? 'active' : ''}`}
                onClick={closeMenu}
            >
              FAQ
            </Link>
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