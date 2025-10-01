import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAdmin } from '../context/AdminContext';
import './About.css';

const About = () => {
    const { content } = useAdmin();

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
            title: 'Teaching Experience Since 2013',
            description: 'Teaching students of all ages at every age & level',
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
                                Your dedicated English teacher with a passion for holistic language learning and teaching experience since 2013
                            </p>
                            <p className="about-description">
                                {content.about.intro}
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
                                <img
                                    src="/images/Rose.jpg"
                                    alt="Rose Scott - English Teacher"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '50%'
                                    }}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = '<span>Professional Photo of Rose</span>';
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What Makes My Teaching Different */}
            <section className="teaching-philosophy section">
                <div className="container">
                    <motion.div
                        className="philosophy-content"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>What Makes My Teaching Different?</h2>
                        <div className="philosophy-grid">
                            <div className="philosophy-card">
                                <div className="philosophy-icon">🎯</div>
                                <h3>Interest-Based Learning</h3>
                                <p>
                                    {content.about.philosophy}
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
                                Since 2013, I've had the privilege of teaching students from diverse backgrounds
                                and helping them achieve their English learning goals.
                            </p>
                            <div className="experience-highlights">
                                <div className="highlight">
                                    <h4>🌍 International Experience</h4>
                                    <p>
                                        During my time teaching in Spain, I taught speakers of Spanish, Catalan, Galician, Portuguese and French.
                                        Now, I'm excited to expand my reach to students worldwide!
                                    </p>
                                </div>
                                <div className="highlight">
                                    <h4>🌍 All Ages & Levels</h4>
                                    <p>
                                        From students just starting their English journey to those perfecting
                                        their skills, I've taught students of all ages at every level from A1 beginner to C2 proficiency.
                                    </p>
                                </div>
                                <div className="highlight">
                                    <h4>🌍 Specialized Expertise</h4>
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
                        <h2>My Unique Approach</h2>
                        <p>Project courses - something you won't find elsewhere</p>
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
                                Explore My Classes
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;