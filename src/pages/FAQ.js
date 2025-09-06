import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './FAQ.css';

const FAQ = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        {
            category: 'Getting Started',
            questions: [
                {
                    question: 'How long is the free consultation?',
                    answer: 'The consultation lasts 20 minutes and includes a speaking assessment and discussion of your goals. It\'s completely free with no commitment required.'
                },
                {
                    question: 'What do I need for online lessons?',
                    answer: 'Just a computer or tablet with internet connection, camera, and microphone. I use Google Meets (upgrading to a premium platform soon) for video calls. I\'ll handle all the technical setup!'
                },
                {
                    question: 'Do you teach complete beginners?',
                    answer: 'Absolutely! I teach all levels from A1 (complete beginner) to C2 (proficiency). I adapt my teaching methods to match your current level and learning pace.'
                },
                {
                    question: 'How do I know what level I am?',
                    answer: 'I provide a free level test via Google Form that assesses your grammar and vocabulary. During our consultation, I\'ll evaluate your speaking level. This gives us a complete picture of your abilities.'
                }
            ]
        },
        {
            category: 'Teaching Methods',
            questions: [
                {
                    question: 'What makes your teaching approach different?',
                    answer: 'I use "holistic language teaching" - targeting your personal interests to make learning engaging. My unique "project courses" using books, podcasts, or series are something you won\'t find elsewhere!'
                },
                {
                    question: 'What are project courses?',
                    answer: 'These are my signature courses where we study a specific book, podcast, or TV series together. Choose from Book Club, Podcast Club, or Cinema Club - learning English through content you actually enjoy!'
                },
                {
                    question: 'What materials do you use?',
                    answer: 'I combine Oxford Premium platform textbooks (you purchase your own copy), my custom Google Docs and Forms materials, plus external resources like novels, podcasts, and series for project courses.'
                },
                {
                    question: 'How do you maximize speaking practice?',
                    answer: 'I focus on Student Talk Time (STT) - getting you to actively use English rather than just listening. Even grammar lessons include plenty of speaking practice to consolidate learning.'
                }
            ]
        },
        {
            category: 'Scheduling & Booking',
            questions: [
                {
                    question: 'How flexible is the scheduling?',
                    answer: 'Very flexible! I offer one-on-one lessons that work around your schedule, plus group classes at set times. You can book lesson-by-lesson or choose 1, 3, or 9-month course packages.'
                },
                {
                    question: 'Can I cancel or reschedule lessons?',
                    answer: 'Yes! You can cancel or reschedule with at least 24 hours notice at no charge. This gives us both flexibility while maintaining a consistent learning schedule.'
                },
                {
                    question: 'What are your available hours?',
                    answer: 'I\'m available Monday-Friday, 9am-6pm UK time. I\'m happy to work with international students - we\'ll find times that work for your time zone!'
                },
                {
                    question: 'How do I book lessons?',
                    answer: 'Simply contact me through the website form or email. I\'m working on an online booking system to make this even easier! Once you pay, your spot is secured in my timetable.'
                }
            ]
        },
        {
            category: 'Pricing & Payments',
            questions: [
                {
                    question: 'What are your rates?',
                    answer: 'One-on-one lessons are £25/hour. Group classes are £10 per student per hour (3-8 students). I offer package discounts: 5% off for 5 lessons, 10% off for 10 lessons.'
                },
                {
                    question: 'Why do you require payment in advance?',
                    answer: 'Advance payment secures your preferred time slots and helps you stay committed to your learning goals. Plus, you get better rates with package deals!'
                },
                {
                    question: 'What payment methods do you accept?',
                    answer: 'I accept PayPal and plan to add Stripe for better exchange rates. Both are secure, international payment platforms perfect for online students.'
                },
                {
                    question: 'Are there any hidden fees?',
                    answer: 'None! The price you see is what you pay. The free consultation, level test, needs assessment, and student portal access are all included.'
                }
            ]
        },
        {
            category: 'Courses & Exams',
            questions: [
                {
                    question: 'Which exams can you help me prepare for?',
                    answer: 'I have extensive experience with Cambridge exams (A2 Key to C2 Proficiency), IELTS, TOEFL, and Oxford Test of English (OTE). I\'ll create a tailored preparation plan for your target exam.'
                },
                {
                    question: 'How long does exam preparation take?',
                    answer: 'It depends on your current level and target exam. Typically 1-9 months of focused preparation. We\'ll assess your needs during the consultation and create a realistic timeline.'
                },
                {
                    question: 'Can I join a course that\'s already started?',
                    answer: 'Sometimes! It depends on the course type and how far along the group is. Contact me to discuss joining an ongoing course - I may be able to accommodate late joiners.'
                },
                {
                    question: 'What if I need to stop my course early?',
                    answer: 'Life happens! Contact me if you need to adjust or pause your studies. While I prefer advance notice, I\'m understanding about genuine circumstances and will work with you to find a solution.'
                }
            ]
        }
    ];

    return (
        <div className="faq">
            {/* Hero Section */}
            <section className="faq-hero">
                <div className="container">
                    <motion.div
                        className="faq-hero-content"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Frequently Asked Questions</h1>
                        <p className="faq-subtitle">
                            Everything you need to know about learning English with me
                        </p>
                        <p className="faq-description">
                            Get answers to the most common questions about my teaching methods,
                            scheduling, pricing, and course offerings. Can't find what you're looking for?
                            Feel free to contact me directly!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="faq-content section">
                <div className="container">
                    {faqData.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            className="faq-category"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                        >
                            <h2 className="category-title">{category.category}</h2>
                            <div className="faq-list">
                                {category.questions.map((faq, faqIndex) => {
                                    const globalIndex = `${categoryIndex}-${faqIndex}`;
                                    const isOpen = openFAQ === globalIndex;

                                    return (
                                        <div key={faqIndex} className="faq-item">
                                            <button
                                                className={`faq-question ${isOpen ? 'active' : ''}`}
                                                onClick={() => toggleFAQ(globalIndex)}
                                            >
                                                <span>{faq.question}</span>
                                                <span className={`faq-icon ${isOpen ? 'open' : ''}`}>+</span>
                                            </button>
                                            <motion.div
                                                className="faq-answer"
                                                initial={false}
                                                animate={{
                                                    height: isOpen ? 'auto' : 0,
                                                    opacity: isOpen ? 1 : 0
                                                }}
                                                transition={{ duration: 0.3 }}
                                                style={{ overflow: 'hidden' }}
                                            >
                                                <div className="faq-answer-content">
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </motion.div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Quick Help */}
            <section className="quick-help section bg-light">
                <div className="container">
                    <motion.div
                        className="quick-help-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>Still Have Questions?</h2>
                        <p>
                            I'm here to help! Get personalized answers to your specific questions
                            during our free consultation, or send me a message anytime.
                        </p>
                        <div className="help-options">
                            <div className="help-option">
                                <div className="help-icon">🎯</div>
                                <h4>Free Consultation</h4>
                                <p>Get all your questions answered in person during our 20-minute consultation</p>
                                <Link to="/contact" className="btn btn-primary">Book Now</Link>
                            </div>
                            <div className="help-option">
                                <div className="help-icon">💬</div>
                                <h4>Send a Message</h4>
                                <p>Have a specific question? Send me a message and I'll respond within 24 hours</p>
                                <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="faq-cta section">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>Ready to Start Learning?</h2>
                        <p>
                            Don't let questions hold you back from improving your English.
                            Let's discuss your goals and create the perfect learning plan for you.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary">
                                Start Today
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

export default FAQ;