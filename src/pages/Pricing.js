import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Pricing.css';

const Pricing = () => {
    const pricingPlans = [
        {
            type: 'One-on-One Lessons',
            icon: '👤',
            basePrice: '£25',
            unit: 'per hour',
            description: 'Personalized instruction tailored to your specific needs',
            features: [
                'Customized lesson plans',
                'Flexible scheduling',
                'Individual attention',
                'Progress tracking',
                'All materials included'
            ],
            packages: [
                { lessons: 1, price: '£25.00', savings: null },
                { lessons: 5, price: '£118.75', savings: '5% discount' },
                { lessons: 10, price: '£225.00', savings: '10% discount' }
            ],
            popular: false
        },
        {
            type: 'Group Classes',
            icon: '👥',
            basePrice: '£10',
            unit: 'per student per hour',
            description: 'Learn with other students in small groups (3-8 students)',
            features: [
                'Interactive group learning',
                'Cultural exchange opportunities',
                'Peer conversation practice',
                'Cost-effective learning',
                'Collaborative activities'
            ],
            durations: [
                {
                    name: '1 Month Course',
                    price: '£240',
                    hours: '24 hours total (6hrs/week for 4 weeks)',
                    discount: 'Economical hourly rate'
                },
                {
                    name: '3 Month Course',
                    standardPrice: 'From £114/month',
                    intensivePrice: 'From £228/month',
                    originalPrice: 'From £360',
                    hours: '3hrs/week (standard) or 6hrs/week (intensive)',
                    discount: '5% discount'
                },
                {
                    name: '9 Month Course',
                    price: '£972',
                    hours: '108 hours total (3hrs/week for 36 weeks)',
                    discount: '10% discount'
                }
            ],
            popular: true
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
            icon: '🔒'
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

            {/* Pricing Plans */}
            <section className="pricing-plans section bg-light">
                <div className="container">
                    <div className="section-title">
                        <h2>Choose Your Learning Format</h2>
                        <p>Select the option that best fits your learning style and budget</p>
                    </div>
                    <div className="plans-grid">
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={index}
                                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                {plan.popular && <div className="popular-badge">Most Popular</div>}
                                <div className="card-header">
                                    <div className="plan-icon">{plan.icon}</div>
                                    <h3>{plan.type}</h3>
                                    <div className="price-display">
                                        <span className="price">{plan.basePrice}</span>
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

                                    {plan.packages && (
                                        <div className="packages-section">
                                            <h4>Package Options:</h4>
                                            <div className="packages-list">
                                                {plan.packages.map((pkg, idx) => (
                                                    <div key={idx} className="package-item">
                                                        <div className="package-info">
                                                            <span className="package-lessons">{pkg.lessons} {pkg.lessons === 1 ? 'lesson' : 'lessons'}</span>
                                                            <span className="package-price">{pkg.price}</span>
                                                        </div>
                                                        {pkg.savings && (
                                                            <span className="package-savings">{pkg.savings}</span>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {plan.durations && (
                                        <div className="durations-section">
                                            <h4>Course Durations:</h4>
                                            <div className="durations-list">
                                                {plan.durations.map((duration, idx) => (
                                                    <div key={idx} className="duration-item">
                                                        <h5>{duration.name}</h5>
                                                        {duration.standardPrice ? (
                                                            <>
                                                                <p className="duration-price">{duration.standardPrice} <span className="price-note">(Standard)</span></p>
                                                                <p className="duration-price">{duration.intensivePrice} <span className="price-note">(Intensive)</span></p>
                                                                {duration.originalPrice && <p className="original-price">{duration.originalPrice}</p>}
                                                            </>
                                                        ) : (
                                                            <p className="duration-price">{duration.price}</p>
                                                        )}
                                                        <p className="duration-hours">{duration.hours}</p>
                                                        <span className="duration-discount">{duration.discount}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
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

            {/* Booking Information */}
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
                            <h2>Booking Information</h2>
                            <div className="payment-details">
                                <div className="payment-item">
                                    <h4>💳 Payment Methods</h4>
                                    <p>Stripe for secure, international transactions with the best exchange rates</p>
                                </div>
                                <div className="payment-item">
                                    <h4>📅 Booking Policy</h4>
                                    <p>Payment in advance secures your slot in my timetable and guarantees your preferred times. 3-month group courses can be paid monthly for your convenience.</p>
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
                                <h3>Why Book in Advance?</h3>
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
                                Explore Course Types
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;