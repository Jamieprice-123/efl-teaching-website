import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Availability.css';

const Availability = () => {
    return (
        <div className="availability">
            <section className="availability-hero">
                <div className="container">
                    <motion.div
                        className="availability-hero-content"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Term-Time Availability</h1>
                        <p className="availability-subtitle">
                            Check my term-time availability throughout the academic year
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="term-availability-section section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Term-Time Availability</h2>
                        <p className="schedule-description">
                            Below you'll find my term-time availability throughout the academic year:
                        </p>
                        <div className="schedule-embed">
                            <iframe
                                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTcHYGO5LGIkuHZqz01_qZ4HtvXLBpxOvKsB-gbdfssCGh-UA4A3cFtgYwh5c9Iudt6YXJYVdaEarcq/pubhtml?widget=true&amp;headers=false"
                                title="Term-Time Availability"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="availability-info section">
                <div className="container">
                    <div className="info-grid">
                        <motion.div
                            className="info-card"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3>🕐 Regular Hours</h3>
                            <p>Monday-Friday</p>
                            <p><strong>07:00-12:00</strong></p>
                            <p><strong>14:00-20:00</strong></p>
                            <p className="timezone">(UK Time)</p>
                        </motion.div>

                        <motion.div
                            className="info-card"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3>📅 Flexible Scheduling</h3>
                            <p>One-on-one lessons work around your schedule, while group classes have set times established before each course starts.</p>
                            <p>Times shown are in <strong>UK timezone</strong>.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="availability-cta section bg-primary">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>Ready to Book Your Lessons?</h2>
                        <p>Contact me to discuss available time slots and get started with your English learning journey</p>
                        <Link to="/contact" className="btn btn-secondary">
                            Contact Me
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Availability;