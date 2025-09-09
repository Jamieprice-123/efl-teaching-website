import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'One-to-One Lessons',
      icon: '👤',
      description: 'Personalized instruction tailored to your specific goals and learning style.',
      features: [
        'Exam preparation (Cambridge, IELTS, TOEFL, OTE)',
        'General English with textbook',
        'General English without textbook',
        'Project courses: Book Club, Podcast Club, Cinema Club',
        'Conversation sessions',
        'Customize your course (tell me what you want to work on)'
      ],
      levels: 'All levels (A1-C2)',
      pricing: 'Single lesson: £25/hour | 5-pack: £118.75 | 10-pack: £225',
      format: 'Online via video conferencing'
    },
    {
      title: 'Group Classes',
      icon: '👥',
      description: 'Interactive group sessions for collaborative learning with students worldwide.',
      features: [
        'Exam preparation (Cambridge, IELTS, TOEFL, OTE)',
        'General English with textbook',
        'General English without textbook',
        'Project courses: Book Club, Podcast Club, Cinema Club',
        'Conversation sessions'
      ],
      levels: 'All levels (A1-C2)',
      pricing: '1 month: £240 | 3 months: from £342 | 9 months: £972',
      format: 'Online group sessions (3-8 students)'
    },
    {
      title: 'Exam Preparation',
      icon: '🎯',
      description: 'Comprehensive preparation for major English proficiency exams.',
      features: [
        'Cambridge suite (A2 Key to C2 Proficiency)',
        'IELTS Academic and General Training',
        'TOEFL iBT preparation',
        'Oxford Test of English (OTE)',
        'Intensive 1-month courses available',
        'Practice tests and exam strategies'
      ],
      levels: 'Upper Intermediate to Advanced (B2-C2)',
      pricing: 'Available in both one-to-one and group formats',
      format: 'Individual or group intensive courses'
    },
    {
      title: 'General English',
      icon: '🌟',
      description: 'Comprehensive English skills development with or without textbooks.',
      features: [
        'With textbook: Structured Oxford Premium materials',
        'Without textbook: Custom materials and activities',
        'Grammar and vocabulary building',
        'All four skills: reading, writing, listening, speaking',
        'Real-world English usage',
        'Progress tracking and assessments'
      ],
      levels: 'Beginner to Advanced (A1-C2)',
      pricing: 'Same rates as standard one-to-one or group classes',
      format: 'Individual lessons or group classes'
    },
    {
      title: 'Project Courses',
      icon: '📚',
      description: 'My unique approach: learn English through books, podcasts, or films you enjoy.',
      features: [
        'Book Club: Read and discuss novels together',
        'Podcast Club: Listen and analyze podcasts',
        'Cinema Club: Watch and discuss films or TV series',
        'Interest-based learning approach',
        'Vocabulary and cultural context',
        'Discussion and critical thinking skills'
      ],
      levels: 'Intermediate to Advanced (B1-C2)',
      pricing: 'Available in 1, 3, or 9-month courses',
      format: 'Available for individuals and groups'
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
      pricing: 'Same rates as standard classes',
      format: 'Group conversations or individual practice'
    }
  ];

  const courseDurations = [
    {
      duration: '1 Month',
      type: 'Intensive Courses',
      description: 'Perfect for quick results or intensive exam preparation',
      groupPrice: '£240 per student',
      groupHours: 'Six hours per week for four weeks',
      oneToOnePrice: 'Package discounts available',
      benefits: ['Intensive pace', 'Economical hourly rate', 'Ideal for quick results']
    },
    {
      duration: '3 Months',
      type: 'Standard or Intensive',
      description: 'Ideal for comprehensive skill development with flexibility',
      groupPrice: 'From £342 per student (5% discount)',
      groupHours: 'Standard: 3hrs/week | Intensive: 6hrs/week',
      oneToOnePrice: '5% discount on lesson packages',
      benefits: ['Available as standard or intensive', '5% discount on hourly rate', 'Ideal for more in-depth skill development']
    },
    {
      duration: '9 Months',
      type: 'Academic Year Course',
      description: 'Complete language learning journey with maximum support',
      groupPrice: '£972 per student (10% discount)',
      groupHours: 'Three hours per week for 36 weeks',
      oneToOnePrice: '10% discount on lesson packages',
      benefits: ['Standard pace', '10% discount on hourly rate', 'Ideal for long-term consolidation of information']
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
                From one-on-one personalized lessons to unique project courses, I offer a range of
                services designed to make learning English engaging, effective, and enjoyable.
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
                          <strong>Pricing:</strong> {service.pricing}
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
                      </div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Duration Breakdown */}
        <section className="course-durations section bg-light">
          <div className="container">
            <motion.div
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <h2>Course Duration & Pricing Options</h2>
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

                    <div className="duration-pricing">
                      <div className="pricing-section">
                        <h5>Group Classes:</h5>
                        <p><strong>{course.groupPrice}</strong></p>
                        <p className="hours-info">{course.groupHours}</p>
                      </div>
                      <div className="pricing-section">
                        <h5>One-to-One:</h5>
                        <p><strong>{course.oneToOnePrice}</strong></p>
                      </div>
                    </div>

                    <div className="duration-benefits">
                      <h5>Course Features:</h5>
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
                  <h4>📋 Needs Assessment</h4>
                  <p>Complete a questionnaire before our meeting</p>
                </div>
                <div className="consultation-feature">
                  <h4>🗣️ Speaking Assessment</h4>
                  <p>Evaluate your current spoken English level</p>
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
                    <p>Professional textbooks and online resources (students purchase their own copy)</p>
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