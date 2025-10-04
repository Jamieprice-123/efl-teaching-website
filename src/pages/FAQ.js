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
                    answer: 'Just a computer or tablet with a strong internet connection, camera, and microphone. I use BigBlueButton as my virtual classroom. I\'ll handle all the technical setup!'
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
            category: 'Course Options & Content',
            questions: [
                {
                    question: 'What\'s the difference between one-to-one and group classes?',
                    answer: 'One-to-one classes offer complete personalization and flexibility, while group classes (3-8 students) provide collaborative learning at a lower cost. Both formats offer the same course content options.'
                },
                {
                    question: 'What course content options do you offer?',
                    answer: 'I offer: Exam preparation, General English (with or without textbook), Project courses (Book Club, Podcast Club, Cinema Club), and Conversation sessions. One-to-one students can also choose "Customize your course" for specific learning goals.'
                },
                {
                    question: 'What are project courses?',
                    answer: 'These are my signature courses where we study a specific book, podcast, or TV series together. Choose from Book Club, Podcast Club, or Cinema Club - learning English through content you actually enjoy! Available for both individual and group students.'
                },
                {
                    question: 'What\'s the difference between General English with and without textbook?',
                    answer: 'With textbook uses structured Oxford Premium materials for systematic progression. Without textbook uses my custom Google Docs, Forms, and activities for more flexible, interest-based learning.'
                }
            ]
        },
        {
            category: 'Pricing & Packages',
            questions: [
                {
                    question: 'How much do one-to-one lessons cost?',
                    answer: 'Single lessons are £25/hour. I offer package discounts: 5-lesson pack for £118.75 (5% off) and 10-lesson pack for £225 (10% off). Packages secure your preferred times and provide better value.'
                },
                {
                    question: 'How much do group classes cost?',
                    answer: 'Group classes vary by duration: 1 month intensive (£240), 3 months from £342 (5% discount), and 9 months for £972 (10% discount). All prices are per student for the complete course.'
                },
                {
                    question: 'What\'s included in the group class pricing?',
                    answer: 'One month: 24 hours total (6hrs/week for 4 weeks). Three months: choice of 36 hours standard or 72 hours intensive. Nine months: 108 hours (3hrs/week for 36 weeks).'
                },
                {
                    question: 'Why do you require payment in advance?',
                    answer: 'Advance payment secures your preferred time slots, provides package discounts, and helps you stay committed to your learning goals. You can cancel or reschedule with 24 hours notice.'
                }
            ]
        },
        {
            category: 'Scheduling & Booking',
            questions: [
                {
                    question: 'How flexible is the scheduling?',
                    answer: 'Very flexible! One-to-one lessons work around your schedule, while group classes have set times, established between teacher and students before each course start. I offer 1, 3, or 9-month course durations to match your availability and goals.'
                },
                {
                    question: 'What are your available hours?',
                    answer: 'I\'m available from Monday-Friday, 07:00-12:00 and 14:00-20:00 UK time'
                },
                {
                    question: 'Can I cancel or reschedule lessons?',
                    answer: 'Yes! You can cancel or reschedule with at least 24 hours notice at no charge. This gives us both flexibility while maintaining a consistent learning schedule.'
                },
                {
                    question: 'How do I book lessons?',
                    answer: 'Simply contact me through the website form, selecting your preferred course format and content. I\'ll respond within 24 hours to arrange your free consultation and discuss scheduling options.'
                }
            ]
        },
        {
            category: 'Teaching Methods & Materials',
            questions: [
                {
                    question: 'What makes your teaching approach different?',
                    answer: 'I use "holistic language teaching" - targeting your personal interests to make learning engaging. My unique "project courses" using books, podcasts, or series are something you won\'t find elsewhere!'
                },
                {
                    question: 'What materials do you use?',
                    answer: 'I combine Oxford Premium platform textbooks (you purchase your own copy), my custom Google Docs and Forms materials, plus external resources like novels, podcasts, and series for project courses.'
                },
                {
                    question: 'How do you maximize speaking practice?',
                    answer: 'I focus on Student Talk Time (STT) - getting you to actively use English in every class. Even grammar lessons include plenty of speaking practice to consolidate learning.'
                },
                {
                    question: 'Which exams can you help me prepare for?',
                    answer: 'I have extensive experience with Cambridge exams (A2 KET to C2 Proficiency), IELTS, TOEFL, and Oxford Test of English (OTE). I\'ll create a tailored preparation plan for your target exam.'
                }
            ]
        }
    ];

    return (
        <div className="faq">
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
                            course options, pricing, and scheduling. Can't find what you're looking for?
                            Feel free to contact me directly!
                        </p>
                    </motion.div>
                </div>
            </section>

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
                            during our free consultation, or send me a message any time.
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
                            <Link to="/my-classes" className="btn btn-secondary">
                                Explore My Classes
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;