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
                Holistic English language teaching with 12 years of experience. 
                Based in Stockport, UK, teaching students worldwide online.
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
                <span>12+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Rose</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">One-on-One Lessons</Link></li>
              <li><Link to="/services">Group Classes</Link></li>
              <li><Link to="/services">Project Courses</Link></li>
              <li><Link to="/services">Exam Preparation</Link></li>
              <li><Link to="/services">General English</Link></li>
              <li><Link to="/services">Conversation Classes</Link></li>
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
                <span>Stockport, UK</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🌍</span>
                <span>Teaching Online Worldwide</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <span>Monday-Friday, 9am-6pm UK Time</span>
              </div>
            </div>
            
            <div className="social-links">
              <h5>Follow Me</h5>
              <div className="social-icons">
                <a 
                  href="https://instagram.com/iamenglishteacherrose" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  📷 Instagram
                </a>
                <a 
                  href="https://tusclasesparticulares.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  🌐 TusClases
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