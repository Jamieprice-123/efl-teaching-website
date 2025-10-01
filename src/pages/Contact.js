import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    englishLevel: '',
    goals: '',
    availability: '',
    serviceInterest: '',
    examType: '',
    projectType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        englishLevel: '',
        goals: '',
        availability: '',
        serviceInterest: '',
        examType: '',
        projectType: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'iamenglishteacherrose@gmail.com',
      link: 'mailto:iamenglishteacherrose@gmail.com'
    },
    {
      icon: '📍',
      title: 'Location',
      content: 'England, UK',
      subtitle: 'Teaching online worldwide'
    },
    {
      icon: '🕐',
      title: 'Availability',
      content: 'Monday - Friday',
      subtitle: '07:00-12:00 and 14:00-20:00 (UK Time)'
    },
    {
      icon: '🌍',
      title: 'Time Zone',
      content: 'GMT/BST (UK)',
      subtitle: 'Flexible scheduling for international students'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Take Level Test',
      description: 'Complete the free online level test to assess your grammar and vocabulary'
    },
    {
      step: '2',
      title: 'Submit Contact Form',
      description: 'Fill out the contact form with your goals and availability'
    },
    {
      step: '3',
      title: 'Complete Needs Assessment',
      description: "You'll receive a needs assessment questionnaire to complete before your consultation"
    },
    {
      step: '4',
      title: 'Free Consultation',
      description: '20-minute video call to assess your spoken level and discuss your needs'
    },
    {
      step: '5',
      title: 'Start Learning',
      description: 'Begin your English learning journey with a personalized plan'
    }
  ];

  return (
      <div className="contact">
        {/* HERO */}
        <section className="contact-hero">
          <div className="container">
            <motion.div
                className="contact-hero-content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
              <h1>Get Started Today</h1>
              <p className="contact-subtitle">
                Ready to transform your English skills? Let's discuss your goals and create a personalized learning plan.
              </p>
              <div className="hero-highlight">
                <span className="highlight-icon">🎯</span>
                <span>Free 20-minute consultation • No commitment required</span>
              </div>
              <div className="hero-level-test">
                <p>Not sure of your English level?</p>
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdzdWyhqj6qsR0J431OOHhiHzQgwii0S9bTMmG2BSj14ogKAQ/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                >
                  Take Free Level Test
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="contact-main section">
          <div className="container">
            <div className="contact-content">
              <motion.div
                  className="contact-form-section"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
              >
                <div className="form-header">
                  <h2>Book Your Free Consultation</h2>
                  <p>Tell me about your English learning goals and I'll get back to you within 24 hours.</p>
                  <div className="level-test-suggestion">
                    <div className="level-test-card">
                      <div className="test-icon">📝</div>
                      <div className="test-content">
                        <h4>Take Our Level Test First!</h4>
                        <p>Get an instant assessment of your English level before booking your consultation.</p>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdzdWyhqj6qsR0J431OOHhiHzQgwii0S9bTMmG2BSj14ogKAQ/viewform?usp=header"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary btn-small"
                        >
                          Take Level Test
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {isSubmitted ? (
                    <div className="form-success">
                      <div className="success-icon">✅</div>
                      <h3>Thank You!</h3>
                      <p>Your message has been sent successfully. I'll get back to you within 24 hours to schedule your free consultation.</p>
                      <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: 'var(--text-light)' }}>
                        Next step: You'll receive a link to the Needs Assessment questionnaire via email.
                      </p>
                    </div>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                      {/* NAME & EMAIL */}
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="name" className="form-label">Full Name *</label>
                          <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="form-input"
                              required
                              placeholder="Your full name"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email" className="form-label">Email Address *</label>
                          <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="form-input"
                              required
                              placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      {/* ENGLISH LEVEL & INTEREST */}
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="englishLevel" className="form-label">Current English Level</label>
                          <select
                              id="englishLevel"
                              name="englishLevel"
                              value={formData.englishLevel}
                              onChange={handleChange}
                              className="form-select"
                          >
                            <option value="">Select your level</option>
                            <option value="A1">A1 - Beginner</option>
                            <option value="A2">A2 - Elementary</option>
                            <option value="B1">B1 - Intermediate</option>
                            <option value="B2">B2 - Upper Intermediate</option>
                            <option value="C1">C1 - Advanced</option>
                            <option value="C2">C2 - Proficiency</option>
                            <option value="unsure">Not sure - I took the level test</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="serviceInterest" className="form-label">Course Interest</label>
                          <select
                              id="serviceInterest"
                              name="serviceInterest"
                              value={formData.serviceInterest}
                              onChange={handleChange}
                              className="form-select"
                          >
                            <option value="">Select a course type</option>
                            <option value="one-on-one">One-on-One Lessons</option>
                            <option value="group">Group Classes</option>
                            <option value="textbook">Textbook Courses</option>
                            <option value="project">Project Courses</option>
                            <option value="exam-prep">Exam Preparation</option>
                            <option value="general">General English</option>
                            <option value="conversation">Conversation Classes</option>
                            <option value="consultation">Just the consultation for now</option>
                          </select>
                        </div>
                      </div>

                      {/* CONDITIONAL FIELDS */}
                      {formData.serviceInterest === 'exam-prep' && (
                          <div className="form-group">
                            <label htmlFor="examType" className="form-label">Exam Type</label>
                            <select
                                id="examType"
                                name="examType"
                                value={formData.examType}
                                onChange={handleChange}
                                className="form-select"
                            >
                              <option value="">Select exam type</option>
                              <option value="cambridge">Cambridge English preparation course</option>
                              <option value="ielts">IELTS preparation course</option>
                              <option value="toefl">TOEFL preparation course</option>
                              <option value="ote">Oxford Test of English preparation course</option>
                            </select>
                          </div>
                      )}

                      {formData.serviceInterest === 'project' && (
                          <div className="form-group">
                            <label htmlFor="projectType" className="form-label">Project Course Type</label>
                            <select
                                id="projectType"
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleChange}
                                className="form-select"
                            >
                              <option value="">Select project type</option>
                              <option value="book-club">Book Club</option>
                              <option value="podcast-club">Podcast Club</option>
                              <option value="cinema-club">Cinema Club</option>
                              <option value="any-project">Any project course - I don't mind</option>
                            </select>
                          </div>
                      )}

                      {/* GOALS */}
                      <div className="form-group">
                        <label htmlFor="goals" className="form-label">Learning Goals</label>
                        <textarea
                            id="goals"
                            name="goals"
                            value={formData.goals}
                            onChange={handleChange}
                            className="form-textarea"
                            placeholder="What would you like to achieve with your English? (e.g., pass an exam, improve conversation skills, advance your career, etc.)"
                            rows="4"
                        />
                      </div>

                      {/* AVAILABILITY */}
                      <div className="form-group">
                        <label htmlFor="availability" className="form-label">Availability</label>
                        <textarea
                            id="availability"
                            name="availability"
                            value={formData.availability}
                            onChange={handleChange}
                            className="form-textarea"
                            placeholder="When are you generally available for lessons? Please include your time zone and preferred days/times."
                            rows="3"
                        />
                      </div>

                      {/* MESSAGE */}
                      <div className="form-group">
                        <label htmlFor="message" className="form-label">Additional Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="form-textarea"
                            placeholder="Any questions or additional information you'd like to share?"
                            rows="3"
                        />
                      </div>

                      <button type="submit" className="btn btn-primary form-submit">
                        Send Message & Book Consultation
                      </button>
                    </form>
                )}
              </motion.div>

              {/* CONTACT INFO */}
              <motion.div
                  className="contact-info-section"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="contact-info-header">
                  <h3>Contact Information</h3>
                  <p>Get in touch through any of these channels</p>
                </div>

                <div className="contact-info-list">
                  {contactInfo.map((info, index) => (
                      <div key={index} className="contact-info-item">
                        <div className="info-icon">{info.icon}</div>
                        <div className="info-content">
                          <h4>{info.title}</h4>
                          {info.link ? (
                              <a href={info.link} className="info-link">{info.content}</a>
                          ) : (
                              <span className="info-text">{info.content}</span>
                          )}
                          {info.subtitle && (
                              <span className="info-subtitle">{info.subtitle}</span>
                          )}
                        </div>
                      </div>
                  ))}
                </div>

                <div className="response-time">
                  <h4>⚡ Quick Response</h4>
                  <p>I typically respond to all inquiries within 24 hours, often much sooner!</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROCESS STEPS */}
        <section className="process-steps section bg-light">
          <div className="container">
            <motion.div
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <h2>How It Works</h2>
              <p>Your journey to better English starts with a simple process</p>
            </motion.div>
            <div className="steps-grid">
              {processSteps.map((step, index) => (
                  <motion.div
                      key={index}
                      className="step-card"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="step-number">{step.step}</div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMETABLE */}
        <section className="timetable-section section">
          <div className="container">
            <motion.div
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <h2>My Teaching Timetable</h2>
              <p>View my current availability and course schedule</p>
            </motion.div>
            <motion.div
                className="timetable-embed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
              <iframe
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQIyjzPuDH074zYyl2TqdY87GOx6fp2pZcUP2KT02Ms5PbuT9yyjuy-WWzzMz5Ns2vkhO812RYUVRSh/pubhtml?gid=1477582036&single=true&widget=true&headers=false"
                  title="Rose's Teaching Timetable"
                  className="timetable-iframe"
              ></iframe>
            </motion.div>
          </div>
        </section>

        {/* NEEDS ASSESSMENT */}
        <section className="needs-assessment-info section bg-light">
          <div className="container">
            <motion.div
                className="assessment-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
              <h2>📋 What Happens After You Contact Me?</h2>
              <div className="assessment-steps">
                <div className="assessment-step">
                  <div className="step-icon">1️⃣</div>
                  <div className="step-content">
                    <h3>I'll Respond Within 24 Hours</h3>
                    <p>You'll receive a confirmation email with next steps and a link to the Needs Assessment.</p>
                  </div>
                </div>
                <div className="assessment-step">
                  <div className="step-icon">2️⃣</div>
                  <div className="step-content">
                    <h3>Complete the Needs Assessment</h3>
                    <p>A short questionnaire to help me understand your learning needs better before our consultation.</p>
                    <a
                        href="https://forms.gle/8avcCJmQgY9n7P2V9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-small"
                        style={{ marginTop: '1rem' }}
                    >
                      Preview Needs Assessment
                    </a>
                  </div>
                </div>
                <div className="assessment-step">
                  <div className="step-icon">3️⃣</div>
                  <div className="step-content">
                    <h3>Schedule Your Free Consultation</h3>
                    <p>We'll arrange a 20-minute video call to discuss your goals and create your personalized learning plan.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="contact-faq section">
          <div className="container">
            <motion.div
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <h2>Frequently Asked Questions</h2>
              <p>Find answers to common questions about my teaching process</p>
            </motion.div>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>Do I need to take the level test before contacting you?</h4>
                <p>It's highly recommended! The level test helps me understand your current grammar and vocabulary level before our consultation, but it's not mandatory.</p>
              </div>
              <div className="faq-item">
                <h4>What happens during the free consultation?</h4>
                <p>We'll have a 20-minute video call where I'll assess your spoken English, discuss your goals, and recommend the best course options for you.</p>
              </div>
              <div className="faq-item">
                <h4>Is there any commitment after the consultation?</h4>
                <p>No, the consultation is completely free with no obligation. You can decide afterward if you'd like to continue with lessons.</p>
              </div>
              <div className="faq-item">
                <h4>How do I pay for lessons if I decide to continue?</h4>
                <p>Payment information will be provided after the consultation. I offer flexible payment options to suit your needs.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Contact;
