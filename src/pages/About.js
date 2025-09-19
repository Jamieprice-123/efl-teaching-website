import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const qualifications = [
        {
            title: 'CELTA Certificate',
            description: 'Cambridge English Language Teaching to Adults certification',
            icon: '🎓'
        },
        {
            title: 'Master\'s in General Linguistics',
            description: 'University of Santiago de Compostela',
            icon: '📚'
        },
        {
            title: 'Bachelor\'s Degree',
            description: 'The University of Manchester',
            icon: '🎓'
        },
        {
            title: '12+ Years Experience',
            description: 'Teaching students from ages 6 to 66',
            icon: '⭐'
        }
    ];

    const teachingAreas = [
        {
            area: 'Cambridge Exams',
            description: 'Extensive experience with the full Cambridge suite of EFL exams'
        },
        {
            area: 'IELTS & TOEFL',
            description: 'Comprehensive preparation for international English tests'
        },
        {
            area: 'Oxford Test of English',
            description: 'Modern, digital English proficiency assessment'
        },
        {
            area: 'General English',
            description: 'Grammar, vocabulary, and conversation for all levels'
        }
    ];

    return (
        <div className="about">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero-content">
                        <motion.div
                            className="about-text"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1>Meet Rose</h1>
                            <p className="about-subtitle">
                                Your dedicated English teacher with a passion for holistic language learning and classroom experience since 2013
                            </p>
                            <p className="about-description">
                                Hello! I'm Rosamund Scott, but you can call me Rose. I'm from Northern Ireland and I have over ten years of experience
                                teaching in language schools in Spain, as well as a year working as a self-employed teacher in Barcelona. In 2025, I moved to England,
                                and now I have my own website! I am very excited to be able to offer group courses now, thanks to this.
                            </p>
                            <div className="about-location">
                                📍 Based in England, UK • Teaching online worldwide
                            </div>
                        </motion.div>
                        <motion.div
                            className="about-image"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="image-placeholder">
                                <span>Professional Photo of Rose</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Teaching Philosophy */}
            <section className="teaching-philosophy section">
                <div className="container">
                    <motion.div
                        className="philosophy-content"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>My Teaching Philosophy</h2>
                        <div className="philosophy-grid">
                            <div className="philosophy-card">
                                <div className="philosophy-icon">🎯</div>
                                <h3>Interest-Based Learning</h3>
                                <p>
                                    I tap into my students' interests to create an inclusive, relaxed class environment
                                    that promotes learning. Whether you love books, podcasts, or TV series, we'll use
                                    what you enjoy to improve your English.
                                </p>
                            </div>
                            <div className="philosophy-card">
                                <div className="philosophy-icon">💬</div>
                                <h3>Active Learning</h3>
                                <p>
                                    I include plenty of grammar and vocabulary when necessary, but I always get students
                                    to practice and use it actively. This helps consolidate learning and maximizes
                                    Student Talk Time (STT).
                                </p>
                            </div>
                            <div className="philosophy-card">
                                <div className="philosophy-icon">🌟</div>
                                <h3>Inclusive Environment</h3>
                                <p>
                                    My ability to create an inclusive, relaxed class environment sets me apart.
                                    Every student feels comfortable to make mistakes and learn from them in a
                                    supportive atmosphere.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Qualifications */}
            <section className="qualifications section bg-light">
                <div className="container">
                    <motion.div
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Qualifications & Experience</h2>
                        <p>Backed by strong academic credentials and extensive real-world teaching experience</p>
                    </motion.div>
                    <div className="qualifications-grid">
                        {qualifications.map((qual, index) => (
                            <motion.div
                                key={index}
                                className="qualification-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="qualification-icon">{qual.icon}</div>
                                <h3>{qual.title}</h3>
                                <p>{qual.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="experience section">
                <div className="container">
                    <div className="experience-content">
                        <motion.div
                            className="experience-text"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2>Teaching Experience</h2>
                            <p className="experience-intro">
                                Over the past 12 years, I've had the privilege of teaching students from diverse backgrounds
                                and helping them achieve their English learning goals.
                            </p>
                            <div className="experience-highlights">
                                <div className="highlight">
                                    <h4>🌹 International Experience</h4>
                                    <p>
                                        During my time teaching in Spain, I taught speakers of Spanish, Catalan, Galician, Portuguese and French.
                                        Now, I'm excited to expand my reach to students worldwide!
                                    </p>
                                </div>
                                <div className="highlight">
                                    <h4>🌹 All Ages & Levels</h4>
                                    <p>
                                        From 6-year-olds just starting their English journey to 66-year-olds perfecting
                                        their skills, I've taught students at every level from A1 beginner to C2 proficiency.
                                    </p>
                                </div>
                                <div className="highlight">
                                    <h4>🌹 Specialized Expertise</h4>
                                    <p>
                                        Extensive experience with exam preparation, especially Cambridge exams,
                                        plus my unique 'project courses' that use books, podcasts, and series
                                        as learning vehicles.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="teaching-areas"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3>Areas of Expertise</h3>
                            <div className="areas-list">
                                {teachingAreas.map((area, index) => (
                                    <div key={index} className="area-item">
                                        <h4>{area.area}</h4>
                                        <p>{area.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What Makes Me Different */}
            <section className="unique-selling-points section bg-light">
                <div className="container">
                    <motion.div
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>What Makes Me Different</h2>
                        <p>My unique approach to English teaching that you won't find elsewhere</p>
                    </motion.div>
                    <motion.div
                        className="usp-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="usp-main">
                            <h3>🎬 Project Courses - My Signature Approach</h3>
                            <p>
                                This is something I've never seen in the language schools I've worked at in Spain, and it's
                                probably the most unique thing I offer: my 'project courses' involve studying a specific
                                book, podcast, or TV series as a vehicle for practicing English.
                            </p>
                            <p>
                                Whether you're interested in classic literature, true crime podcasts, or popular Netflix
                                series, we'll use your interests to create engaging lessons that improve your English
                                naturally while exploring content you actually enjoy.
                            </p>
                            <div className="project-types">
                                <div className="project-type">
                                    <h4>📚 Book Club</h4>
                                    <p>Read and discuss novels, improving vocabulary and comprehension</p>
                                </div>
                                <div className="project-type">
                                    <h4>🎧 Podcast Club</h4>
                                    <p>Listen to podcasts and develop listening skills and pronunciation</p>
                                </div>
                                <div className="project-type">
                                    <h4>🎬 Cinema Club</h4>
                                    <p>Watch series or films and practice speaking and cultural understanding</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Additional Teaching Approach Section */}
            <section className="teaching-approach section">
                <div className="container">
                    <motion.div
                        className="approach-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>What Makes My Teaching Different?</h2>
                        <div className="approach-features">
                            <div className="feature">
                                <h4>🌹 Interest-Based Learning</h4>
                                <p>I tap into your interests to create an inclusive, relaxed class environment that promotes natural learning.</p>
                            </div>
                            <div className="feature">
                                <h4>🌹 Maximized Student Talk Time</h4>
                                <p>My classes focus on getting you speaking and using English actively to consolidate your learning.</p>
                            </div>
                            <div className="feature">
                                <h4>🌹 Unique Project Courses</h4>
                                <p>Study specific books, podcasts, or series as a vehicle for practicing English - something you won't find elsewhere!</p>
                            </div>
                            <div className="feature">
                                <h4>🌹 Teaching Experience since 2013</h4>
                                <p>From teaching students aged 6 to 66, I understand how to adapt my methods to different learning styles.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="about-cta section">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>Ready to Start Your English Journey?</h2>
                        <p>
                            I'd love to help you achieve your English goals with my personalized,
                            interest-based teaching approach. Let's start with a free consultation
                            to see how I can help you succeed.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary">
                                Book Free Consultation
                            </Link>
                            <Link to="/services" className="btn btn-secondary">
                                Explore My Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;