import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: '👥',
      title: 'Group Classes',
      description: 'Interactive group sessions for collaborative learning with students from around the world.',
      link: '/services'
    },
    {
      icon: '👤',
      title: 'One-on-One Lessons',
      description: 'Personalized instruction tailored to your specific goals and learning style.',
      link: '/services'
    },
    {
      icon: '📚',
      title: 'Project Courses',
      description: 'Unique courses studying books, podcasts, or series to practice English in context.',
      link: '/services'
    },
    {
      icon: '🎯',
      title: 'Exam Preparation',
      description: 'Comprehensive preparation for Cambridge, IELTS, TOEFL, and Oxford Test of English.',
      link: '/services'
    }
  ];

  const testimonials = [
    {
      name: 'María González',
      level: 'Advanced Student',
      text: 'Rose\'s teaching style is amazing! Her project courses helped me improve my English while studying topics I actually enjoy.',
      rating: 5
    },
    {
      name: 'Pierre Dubois',
      level: 'Intermediate Student',
      text: 'The holistic approach really works. I feel much more confident speaking English after just 3 months.',
      rating: 5
    },
    {
      name: 'Anna Schmidt',
      level: 'Exam Preparation',
      text: 'Thanks to Rose, I passed my Cambridge C1 exam! Her exam preparation courses are incredibly thorough.',
      rating: 5
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>
                Learn English with{' '}
                <span className="text-gradient">English Teacher Rose</span>
              </h1>
              <p className="hero-description">
                Transform your English skills with holistic language teaching that targets your interests. 
                12 years of experience, CELTA certified, and a Master's in Linguistics from the University of Santiago de Compostela.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Start Learning Today
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  Meet Rose
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="hero-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="image-placeholder">
                <span>Rose's Professional Photo</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Free Consultation CTA */}
      <section className="consultation-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>🎯 Free 20-Minute Consultation</h3>
            <p>Get a personalized assessment of your English level and discover how I can help you achieve your goals.</p>
            <Link to="/contact" className="btn btn-primary">Book Your Free Session</Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-preview section">
        <div className="container">
          <div className="section-title">
            <h2>How I Can Help You Learn English</h2>
            <p>From beginner to advanced, I offer personalized English instruction that makes learning engaging and effective.</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link} className="service-link">Learn More →</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Rose Different */}
      <section className="unique-approach section bg-light">
        <div className="container">
          <div className="approach-content">
            <motion.div 
              className="approach-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>What Makes My Teaching Different?</h2>
              <div className="approach-features">
                <div className="feature">
                  <h4>🎯 Interest-Based Learning</h4>
                  <p>I tap into your interests to create an inclusive, relaxed class environment that promotes natural learning.</p>
                </div>
                <div className="feature">
                  <h4>💬 Maximized Student Talk Time</h4>
                  <p>My classes focus on getting you speaking and using English actively to consolidate your learning.</p>
                </div>
                <div className="feature">
                  <h4>📖 Unique Project Courses</h4>
                  <p>Study specific books, podcasts, or series as a vehicle for practicing English - something you won't find elsewhere!</p>
                </div>
                <div className="feature">
                  <h4>🌍 12 Years of Experience</h4>
                  <p>From teaching students aged 6 to 66, I understand how to adapt my methods to different learning styles.</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="approach-stats"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="stat">
                <div className="stat-number">12+</div>
                <div className="stat-label">Years Teaching</div>
              </div>
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Students Taught</div>
              </div>
              <div className="stat">
                <div className="stat-number">A1-C2</div>
                <div className="stat-label">All Levels</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Online Classes</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="testimonials-preview section">
        <div className="container">
          <div className="section-title">
            <h2>What My Students Say</h2>
            <p>Discover how my holistic teaching approach has helped students from around the world achieve their English goals.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
          <div className="testimonials-cta">
            <Link to="/testimonials" className="btn btn-secondary">Read More Reviews</Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="final-cta section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Transform Your English?</h2>
            <p>Join students from around the world who are achieving their English goals with personalized, engaging instruction.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Get Started Today</Link>
              <Link to="/pricing" className="btn btn-secondary">View Pricing</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;