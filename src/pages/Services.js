import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'One-on-One Lessons',
      icon: '👤',
      description: 'Personalized instruction tailored to your specific goals and learning style.',
      features: [
        'Customized lesson plans based on your needs',
        'Flexible scheduling to fit your lifestyle',
        'Individual attention and immediate feedback',
        'Progress tracking and regular assessments'
      ],
      levels: 'All levels (A1-C2)',
      duration: '1-2 hours per session',
      format: 'Online via video conferencing'
    },
    {
      title: 'Group Classes',
      icon: '👥',
      description: 'Interactive group sessions for collaborative learning with students worldwide.',
      features: [
        'Learn with students from diverse backgrounds',
        'Practice conversation with peers',
        'Cost-effective alternative to private lessons',
        'Collaborative learning activities'
      ],
      levels: 'Beginner to Advanced',
      duration: '1-2 hours per session',
      format: 'Online group sessions (3-8 students)'
    },
    {
      title: 'Textbook Courses',
      icon: '📖',
      description: 'Structured learning with professional Oxford textbook series - New English File or Headway.',
      features: [
        'Choose between New English File or Headway series',
        'Comprehensive grammar and vocabulary',
        'All four skills: reading, writing, listening, speaking',
        'Structured progression through levels',
        'Students purchase their own textbook copy'
      ],
      levels: 'All levels (A1-C2)',
      duration: '1-9 months depending on course length',
      format: 'Available for individuals and groups'
    },
    {
      title: 'Project Courses',
      icon: '📚',
      description: 'My unique approach: learn English through books, podcasts, or films you enjoy.',
      features: [
        'Book Club: Read and discuss novels together',
        'Podcast Club: Listen and analyze podcasts',
        'Cinema Club: Watch and discuss films or TV series',
        'Any project course - I don\'t mind (follow teacher recommendations)'
      ],
      levels: 'Intermediate to Advanced (B1-C2)',
      duration: '1-9 months depending on project',
      format: 'Available for individuals and groups',
      additionalInfo: 'Once you have enrolled in this course, your teacher will send you a poll with three different options for the material to study. Once a decision has been reached, you will need to buy the chosen book or take out a Netflix subscription. In the case of podcasts, the material is always taken from websites that are freely available to everyone, so no purchase is needed.'
    },
    {
      title: 'Exam Preparation',
      icon: '🎯',
      description: 'Comprehensive preparation for Cambridge, IELTS, TOEFL, and Oxford Test of English.',
      features: [
        'Cambridge English preparation (A2 Key to C2 Proficiency)',
        'IELTS Academic and General Training',
        'TOEFL iBT preparation',
        'Oxford Test of English (OTE)',
        'Practice tests and exam strategies',
        'Intensive preparation courses available'
      ],
      levels: 'Upper Intermediate to Advanced (B2-C2)',
      duration: '1-9 months intensive preparation',
      format: 'Individual or group intensive courses'
    },
    {
      title: 'General English',
      icon: '🌟',
      description: 'Grammar, vocabulary, and conversation classes for everyday English skills.',
      features: [
        'Comprehensive grammar instruction',
        'Vocabulary building exercises',
        'Conversation practice sessions',
        'Real-world English usage',
        'Custom materials and activities',
        'All four skills development'
      ],
      levels: 'Beginner to Intermediate (A1-B1)',
      duration: '1-9 months courses available',
      format: 'Individual lessons or group classes'
    },
    {
      title: 'Conversation Classes',
      icon: '💬',
      description: 'Focus on speaking fluency and confidence in everyday conversations.',
      features: [
        'Discussion-based learning',
        'Topic-driven conversations',
        'Pronunciation improvement',
        'Cultural insights and context',
        'Real-world scenarios',
        'Confidence building exercises'
      ],
      levels: 'Intermediate to Advanced (B1-C2)',
      duration: 'Ongoing or structured courses',
      format: 'Group conversations or individual practice'
    }
  ];

  const courseDurations = [
    {
      duration: '1 Month',
      type: 'Quick Projects & Intensive Prep',
      description: 'Perfect for short-term goals or intensive exam preparation',
      benefits: ['Small discount on hourly rate', 'Focused learning objectives', 'Quick results']
    },
    {
      duration: '3 Months',
      type: 'Semi-Intensive Courses',
      description: 'Ideal for quick level progression or mid-length projects',
      benefits: ['Better discount on hourly rate', 'Comprehensive skill development', 'Structured progression']
    },
    {
      duration: '9 Months',
      type: 'Academic Year Courses',
      description: 'Complete language learning journey with maximum support',
      benefits: ['Best discount rates', 'Guaranteed timetable spot', 'Long-term progression tracking']
    }
  ];

  return (
      <div className="services">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="container">
            <motion.div
                className="services-hero-content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
              <h1>English Learning Services</h1>
              <p className="services-subtitle">
                Comprehensive English instruction tailored to your goals, interests, and schedule
              </p>
              <p className="services-description">
                From one-on-one personalized lessons to unique project courses and structured textbook learning,
                I offer a range of services designed to make learning English engaging, effective, and enjoyable.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-grid-section section">
          <div className="container">
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
                    <div className="service-header">
                      <div className="service-icon">{service.icon}</div>
                      <h3>{service.title}</h3>
                      <p className="service-description">{service.description}</p>
                    </div>
                    <div className="service-details">
                      <div className="service-info">
                        <div className="info-item">
                          <strong>Levels:</strong> {service.levels}
                        </div>
                        <div className="info-item">
                          <strong>Duration:</strong> {service.duration}
                        </div>
                        <div className="info-item">
                          <strong>Format:</strong> {service.format}
                        </div>
                      </div>
                      <div className="service-features">
                        <h4>What's Included:</h4>
                        <ul>
                          {service.features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                        {service.additionalInfo && (
                            <div className="additional-info">
                              <h5>How it works:</h5>
                              <p>{service.additionalInfo}</p>
                            </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Durations */}
        <section className="course-durations section bg-light">
          <div className="container">
            <motion.div
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <h2>Course Duration Options</h2>
              <p>Choose the course length that best fits your schedule and learning goals</p>
            </motion.div>
            <div className="durations-grid">
              {courseDurations.map((course, index) => (
                  <motion.div
                      key={index}
                      className="duration-card"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="duration-header">
                      <h3>{course.duration}</h3>
                      <h4>{course.type}</h4>
                    </div>
                    <p className="duration-description">{course.description}</p>
                    <div className="duration-benefits">
                      <h5>Benefits:</h5>
                      <ul>
                        {course.benefits.map((benefit, idx) => (
                            <li key={idx}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Consultation */}
        <section className="consultation-section section">
          <div className="container">
            <motion.div
                className="consultation-content"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
              <h2>🎯 Start with a Free Consultation</h2>
              <p>
                Not sure which service is right for you? I offer a free 20-minute consultation
                to assess your English level and discuss your goals.
              </p>
              <div className="consultation-features">
                <div className="consultation-feature">
                  <h4>📝 Free Level Test</h4>
                  <p>Take our online assessment to determine your current English level</p>
                  <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdzdWyhqj6qsR0J431OOHhiHzQgwii0S9bTMmG2BSj14ogKAQ/viewform?usp=header"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-small"
                      style={{marginTop: '1rem'}}
                  >
                    Take Level Test
                  </a>
                </div>
                <div className="consultation-feature">
                  <h4>📋 Needs Assessment</h4>
                  <p>Complete a questionnaire before our meeting</p>
                </div>
                <div className="consultation-feature">
                  <h4>🗣️ Speaking Assessment</h4>
                  <p>Evaluate your current spoken English level during consultation</p>
                </div>
                <div className="consultation-feature">
                  <h4>🎯 Goal Setting</h4>
                  <p>Discuss your objectives and create a learning plan</p>
                </div>
                <div className="consultation-feature">
                  <h4>📚 Course Recommendation</h4>
                  <p>Get personalized service recommendations</p>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Book Your Free Consultation
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Materials and Methods */}
        <section className="materials-section section bg-light">
          <div className="container">
            <div className="materials-content">
              <motion.div
                  className="materials-text"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
              >
                <h2>Teaching Materials & Methods</h2>
                <p className="materials-intro">
                  I use a combination of proven textbooks, custom materials, and engaging external
                  resources to create dynamic, effective lessons.
                </p>
                <div className="materials-list">
                  <div className="material-item">
                    <h4>📚 Oxford Premium Platform</h4>
                    <p>Professional textbooks: New English File and Headway series (students purchase their own copy)</p>
                  </div>
                  <div className="material-item">
                    <h4>📝 Custom Materials</h4>
                    <p>My own Google Docs, Forms, and Baamboozle quiz materials</p>
                  </div>
                  <div className="material-item">
                    <h4>🎬 External Resources</h4>
                    <p>Novels, podcasts, series, and YouTube videos for project courses</p>
                  </div>
                  <div className="material-item">
                    <h4>🔐 Private Student Area</h4>
                    <p>Access course materials, notes, and resources in your secure student portal</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                  className="teaching-approach"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="approach-card">
                  <h3>My Teaching Approach</h3>
                  <div className="approach-points">
                    <div className="approach-point">
                      <span className="point-icon">🎯</span>
                      <div>
                        <h5>Holistic Learning</h5>
                        <p>Integrate your interests into every lesson</p>
                      </div>
                    </div>
                    <div className="approach-point">
                      <span className="point-icon">💬</span>
                      <div>
                        <h5>Active Practice</h5>
                        <p>Maximize Student Talk Time (STT)</p>
                      </div>
                    </div>
                    <div className="approach-point">
                      <span className="point-icon">🌟</span>
                      <div>
                        <h5>Supportive Environment</h5>
                        <p>Learn comfortably at your own pace</p>
                      </div>
                    </div>
                    <div className="approach-point">
                      <span className="point-icon">📈</span>
                      <div>
                        <h5>Progress Tracking</h5>
                        <p>Regular feedback and assessments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="services-cta section">
          <div className="container">
            <motion.div
                className="cta-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
              <h2>Ready to Start Learning?</h2>
              <p>
                Choose the service that best fits your needs and goals.
                I'm here to help you succeed in your English learning journey.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Get Started Today
                </Link>
                <Link to="/pricing" className="btn btn-secondary">
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
  );
};

export default Services;