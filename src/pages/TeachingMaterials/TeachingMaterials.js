import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAdmin } from '../../context/AdminContext';
import './TeachingMaterials.css';

const TeachingMaterials = () => {
    const { content } = useAdmin();
    const dynamicMaterials = content.teachingMaterials || [];

    // ✅ Hard-coded featured materials (always displayed)
    const staticFeatured = [
        {
            id: 'golden-rules',
            title: 'The Golden Rules of English',
            description:
                "My students often complain about English being irregular and unpredictable. These 'Golden Rules' remind us that English actually has many stable, reliable patterns — compiled from years of teaching and observation.",
            category: 'Grammar & Usage',
            link: 'https://docs.google.com/document/d/1EIPl3hduP6Xx9-yutB_xO3127i0E-uy0Mh4JhPklbxU/edit?usp=sharing',
        },
        {
            id: 'alphabet-pronunciation',
            title: 'Pronunciation of the English Alphabet',
            description:
                "A tricky but essential guide to pronouncing English letters correctly — especially the often-confused ‘E’ and ‘I’. Includes practice tips and examples for clearer pronunciation.",
            category: 'Pronunciation',
            link: 'https://docs.google.com/document/d/1sjjIRCuvJj_tFEN6E5a4QauoedmMXziraTNU6lUQunw/edit?usp=sharing',
        },
    ];

    // ✅ Merge hardcoded + dynamic materials
    const featuredMaterials = [...staticFeatured, ...dynamicMaterials];

    return (
        <div className="teaching-materials">
            {/* Hero Section */}
            <section className="materials-hero">
                <div className="container">
                    <motion.div
                        className="materials-hero-content"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Teaching Materials & Resources</h1>
                        <p className="materials-subtitle">
                            Tips, strategies, and insights from teaching experience since 2013
                        </p>
                        <p className="materials-description">
                            Welcome to my teaching materials section! Here I share practical advice, teaching insights, and learning
                            strategies to help you on your English journey. From grammar tips to cultural insights,
                            find resources to support your language learning goals.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Materials Section */}
            <section className="featured-materials section">
                <div className="container">
                    <motion.div
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Featured Resources</h2>
                        <p>Don't miss these popular materials from my teaching experience</p>
                    </motion.div>

                    {featuredMaterials.length > 0 ? (
                        <div className="featured-grid">
                            {featuredMaterials.map((material, index) => (
                                <motion.article
                                    key={material.id || index}
                                    className="featured-material-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    <div className="material-content">
                                        <div className="material-meta">
                                            <span className="material-category">{material.category}</span>
                                            <span className="featured-badge">Featured</span>
                                        </div>
                                        <h3>{material.title}</h3>
                                        <p>{material.description}</p>
                                        <a
                                            href={material.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="read-more-link"
                                        >
                                            View Resource →
                                        </a>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    ) : (
                        <div className="no-materials">
                            <p>No teaching materials available yet. Check back soon!</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="materials-cta section">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>Want Personalized English Learning?</h2>
                        <p>
                            While these materials provide general guidance, nothing beats personalized instruction
                            tailored to your specific goals and interests. Let's work together to create your
                            perfect English learning plan.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary">
                                Book Free Consultation
                            </Link>
                            <Link to="/my-classes" className="btn btn-secondary">
                                View Course Types
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Coming Soon Section */}
            <section className="coming-soon section bg-light">
                <div className="container">
                    <motion.div
                        className="coming-soon-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3>🚀 More Materials Coming Soon!</h3>
                        <p>
                            In the meantime, you can find my quick English tips and mini-lessons on Instagram
                            <a href="https://instagram.com/iamenglishteacherrose" target="_blank" rel="noopener noreferrer"> @iamenglishteacherrose</a>.
                        </p>
                        <p>
                            Have a specific topic you'd like me to write about? Let me know in your consultation
                            or send me a message!
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default TeachingMaterials;
