// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            {/* Brand Section */}
            <div className="footer-section">
              <div className="footer-brand">
                <h3>English Teacher Rose</h3>
                <p>
                  Holistic English language teaching since 2013.
                  Based in England, UK, teaching students worldwide online.
                </p>
              </div>
              <div className="footer-credentials">
                <div className="credential">
                  <span className="credential-icon">🎓</span>
                  <span>CELTA Certified</span>
                </div>
                <div className="credential">
                  <span className="credential-icon">📚</span>
                  <span>MA in Linguistics</span>
                </div>
                <div className="credential">
                  <span className="credential-icon">⭐</span>
                  <span>Teaching since 2013</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Rose</Link></li>
                <li><Link to="/my-classes">My Classes</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/testimonials">Testimonials</Link></li>
                <li><Link to="/teaching-materials">Teaching Materials</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4>My Classes</h4>
              <ul className="footer-links">
                <li><Link to="/my-classes">One-on-One Lessons</Link></li>
                <li><Link to="/my-classes">Group Classes</Link></li>
                <li><Link to="/my-classes">Project Courses</Link></li>
                <li><Link to="/my-classes">Exam Preparation</Link></li>
                <li><Link to="/my-classes">General English</Link></li>
                <li><Link to="/my-classes">Conversation Classes</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Get in Touch</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a href="mailto:iamenglishteacherrose@gmail.com">
                    iamenglishteacherrose@gmail.com
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>England, UK</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🌍</span>
                  <span>Teaching Online Worldwide</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕐</span>
                  <span>Monday-Friday, 07:00-12:00 and 14:00-20:00 UK time</span>
                </div>
              </div>

              <div className="social-links">
                <h5>Follow Me</h5>
                <div className="social-icons">
                  <a
                      href="https://instagram.com/englishteacherrose"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                  >
                    📷 Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="copyright">
                <p>&copy; {currentYear} English Teacher Rose. All rights reserved.</p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', opacity: 0.8 }}>Built by JDPCrafted</p>
              </div>
              <div className="footer-cta">
                <Link to="/contact" className="btn btn-primary btn-small">
                  Start Learning Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;