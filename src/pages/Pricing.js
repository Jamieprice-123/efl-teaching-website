import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Pricing.css';

const Pricing = () => {
  const oneToOnePricing = [
    {
      type: 'Single Lesson',
      price: '£25',
      unit: 'per hour',
      description: 'Pay-as-you-go flexibility',
      features: ['Complete flexibility', 'No commitment required', 'Perfect for trying out lessons'],
      popular: false
    },
    {
      type: '5-Hour Pack',
      price: '£118.75',
      originalPrice: '£125',
      unit: '5% discount',
      description: 'Small commitment, small saving',
      features: ['5% discount applied', 'Secure your preferred times', 'Better value than single lessons'],
      popular: false
    },
    {
      type: '10-Hour Pack',
      price: '£225',
      originalPrice: '£250',
      unit: '10% discount',
      description: 'Best value for one-to-one learning',
      features: ['10% discount applied', 'Maximum savings', 'Long-term learning commitment'],
      popular: true
    }
  ];

  const groupCoursePricing = [
    {
      duration: 'One Month',
      type: 'Intensive Course',
      price: '£240',
      unit: 'per student',
      description: '6 hours per week for 4 weeks (24 hours total)',
      features: [
        'Intensive pace',
        'Economical hourly rate (£10/hour)',
        'Ideal for quick results'
      ],
      popular: false
    },
    {
      duration: 'Three Months',
      type: 'Standard or Intensive',
      price: 'From £342',
      originalPrice: 'From £360',
      unit: '5% discount',
      description: 'Choose your pace: 3hrs/week (standard) or 6hrs/week (intensive)',
      features: [
        'Available as standard or intensive',
        '5% discount on hourly rate',
        'Ideal for more in-depth skill development'
      ],
      details: [
        'Standard: £342 (was £360) - 3 hours/week for 12 weeks',
        'Intensive: £684 (was £720) - 6 hours/week for 12 weeks'
      ],
      popular: true
    },
    {
      duration: 'Nine Months',
      type: 'Academic Year Course',
      price: '£972',
      originalPrice: '£1,080',
      unit: '10% discount',
      description: '3 hours per week for 36 weeks (108 hours total)',
      features: [
        'Standard pace',
        '10% discount on hourly rate',
        'Ideal for long-term consolidation of information'
      ],
      popular: false
    }
  ];

  const additionalServices = [
    {
      service: 'Free Consultation',
      price: '£0',
      description: '20-minute assessment and goal-setting session',
      icon: '🎯'
    },
    {
      service: 'Needs Assessment',
      price: 'Included',
      description: 'Questionnaire to understand your learning needs',
      icon: '📋'
    },
    {
      service: 'Level Test',
      price: 'Free',
      description: 'Grammar and vocabulary assessment via Google Form',
      icon: '📝'
    },
    {
      service: 'Student Portal Access',
      price: 'Included',
      description: 'Private area for course materials and resources',
      icon: '🔐'
    }
  ];

  return (
      <div className="pricing">
        {/* Hero Section */}
        <section className="pricing-hero">
          <div className="container">
            <motion.div
                className="pricing-hero-content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
              <h1>Simple, Transparent Pricing</h1>
              <p className="pricing-subtitle">
                Quality English instruction at fair, competitive rates with no hidden fees
              </p>
              <p className="pricing-description">
                Whether you prefer one-on-one attention or group learning, I offer flexible
                pricing options to suit your budget and learning goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Free Consultation CTA */}
        <section className="free-consultation">
          <div className="container">
            <motion.div
                className="consultation-banner"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <div className="consultation-content">
                <h3>🎯 Start with a FREE 20-Minute Consultation</h3>
                <p>Assess your level, discuss your goals, and find the perfect learning plan</p>
                <Link to="/contact" className="btn btn-primary">Book Your Free Session</Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* One-to-One Pricing */}
        <section className="one-to-one-pricing section">
          <div className="container">
            <motion.div
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <h2>One-to-One Lessons</h2>
              <p>Personalized instruction with flexible payment options</p>
            </motion.div>
            <div className="plans-grid">
              {oneToOnePricing.map((plan, index) => (
                  <motion.div
                      key={index}
                      className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {plan.popular && <div className="popular-badge">Best Value</div>}
                    <div className="card-header">
                      <div className="plan-icon">👤</div>
                      <h3>{plan.type}</h3>
                      <div className="price-display">
                        {plan.originalPrice && (
                            <span className="original-price">£{plan.originalPrice}</span>
                        )}
                        <span className="price">{plan.price}</span>
                        <span className="unit">{plan.unit}</span>
                      </div>
                      <p className="plan-description">{plan.description}</p>
                    </div>
                    <div className="card-body">
                      <div className="features-section">
                        <h4>What's Included:</h4>
                        <ul className="features-list">
                          {plan.features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="card-footer">
                      <Link to="/contact" className="btn btn-primary">
                        Get Started
                      </Link>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Group Course Pricing */}
        <section className="group-pricing section bg-light">
          <div className="container">
            <motion.div
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <h2>Group Classes</h2>
              <p>Structured courses with fellow students - choose your duration</p>
            </motion.div>
            <div className="plans-grid">
              {groupCoursePricing.map((course, index) => (
                  <motion.div
                      key={index}
                      className={`pricing-card ${course.popular ? 'popular' : ''}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {course.popular && <div className="popular-badge">Most Popular</div>}
                    <div className="card-header">
                      <div className="plan-icon">👥</div>
                      <h3>{course.duration}</h3>
                      <h4 className="course-type">{course.type}</h4>
                      <div className="price-display">
                        {course.originalPrice && (
                            <span className="original-price">{course.originalPrice}</span>
                        )}
                        <span className="price">{course.price}</span>
                        <span className="unit">{course.unit}</span>
                      </div>
                      <p className="plan-description">{course.description}</p>
                    </div>
                    <div className="card-body">
                      <div className="features-section">
                        <h4>Course Features:</h4>
                        <ul className="features-list">
                          {course.features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      {course.details && (
                          <div className="details-section">
                            <h4>Pricing Details:</h4>
                            <ul className="details-list">
                              {course.details.map((detail, idx) => (
                                  <li key={idx}>{detail}</li>
                              ))}
                            </ul>
                          </div>
                      )}
                    </div>
                    <div className="card-footer">
                      <Link to="/contact" className="btn btn-primary">
                        Join Group Class
                      </Link>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="additional-services section">
          <div className="container">
            <motion.div
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <h2>What's Included at No Extra Cost</h2>
              <p>These valuable services are included with all my courses</p>
            </motion.div>
            <div className="services-grid">
              {additionalServices.map((service, index) => (
                  <motion.div
                      key={index}
                      className="service-item"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="service-icon">{service.icon}</div>
                    <h4>{service.service}</h4>
                    <div className="service-price">{service.price}</div>
                    <p>{service.description}</p>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Information */}
        <section className="payment-info section bg-light">
          <div className="container">
            <div className="payment-content">
              <motion.div
                  className="payment-text"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
              >
                <h2>Payment Information</h2>
                <div className="payment-details">
                  <div className="payment-item">
                    <h4>💳 Payment Methods</h4>
                    <p>PayPal and Stripe for secure, international transactions with the best exchange rates</p>
                  </div>
                  <div className="payment-item">
                    <h4>📅 Payment Policy</h4>
                    <p>Payment in advance secures your slot in my timetable and guarantees your preferred times</p>
                  </div>
                  <div className="payment-item">
                    <h4>🔄 Cancellation Policy</h4>
                    <p>Cancel or reschedule lessons with at least 24 hours notice at no charge</p>
                  </div>
                  <div className="payment-item">
                    <h4>🛡️ Secure & Safe</h4>
                    <p>All payments processed through secure, encrypted payment platforms</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                  className="payment-highlight"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="highlight-card">
                  <h3>Why Pay in Advance?</h3>
                  <div className="highlight-benefits">
                    <div className="benefit">
                      <span className="benefit-icon">🔒</span>
                      <div>
                        <h5>Secure Your Spot</h5>
                        <p>Guarantee your preferred lesson times</p>
                      </div>
                    </div>
                    <div className="benefit">
                      <span className="benefit-icon">💰</span>
                      <div>
                        <h5>Better Rates</h5>
                        <p>Access package discounts and savings</p>
                      </div>
                    </div>
                    <div className="benefit">
                      <span className="benefit-icon">📈</span>
                      <div>
                        <h5>Consistent Progress</h5>
                        <p>Maintain regular learning schedule</p>
                      </div>
                    </div>
                    <div className="benefit">
                      <span className="benefit-icon">🎯</span>
                      <div>
                        <h5>Goal Achievement</h5>
                        <p>Stay committed to your learning journey</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pricing-cta section">
          <div className="container">
            <motion.div
                className="cta-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
              <h2>Ready to Start Learning English?</h2>
              <p>
                Choose the option that works best for you, or start with a free consultation
                to discuss your goals and find the perfect learning plan.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Book Free Consultation
                </Link>
                <Link to="/services" className="btn btn-secondary">
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
  );
};

export default Pricing;