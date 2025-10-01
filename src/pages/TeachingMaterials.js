import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './TeachingMaterials.css';

const TeachingMaterials = () => {
    const materials = [
        {
            id: 1,
            title: 'The Power of Interest-Based Learning in English',
            excerpt: 'Discover how incorporating your personal interests into English learning can accelerate your progress and make studying more enjoyable.',
            date: '2024-03-15',
            category: 'Teaching Methods',
            readTime: '5 min read',
            featured: true
        },
        {
            id: 2,
            title: 'Why Project Courses Work: Learning English Through Books and Podcasts',
            excerpt: 'Explore the unique benefits of using books, podcasts, and series as vehicles for English language learning.',
            date: '2024-03-10',
            category: 'Learning Strategies',
            readTime: '7 min read',
            featured: true
        },
        {
            id: 3,
            title: 'Cambridge Exam Preparation: A Complete Guide',
            excerpt: 'Everything you need to know about preparing for Cambridge English exams, from A2 Key to C2 Proficiency.',
            date: '2024-03-05',
            category: 'Exam Preparation',
            readTime: '10 min read',
            featured: false
        },
        {
            id: 4,
            title: 'Maximizing Student Talk Time: Tips for Better Conversation Practice',
            excerpt: 'Learn practical strategies to increase your speaking time and build confidence in English conversations.',
            date: '2024-02-28',
            category: 'Speaking Skills',
            readTime: '6 min read',
            featured: false
        },
        {
            id: 5,
            title: 'The Holistic Approach to English Learning',
            excerpt: 'Understanding how holistic language teaching integrates all aspects of English learning for better results.',
            date: '2024-02-20',
            category: 'Teaching Philosophy',
            readTime: '8 min read',
            featured: false
        },
        {
            id: 6,
            title: 'Online vs In-Person English Classes: What Works Best?',
            excerpt: 'Compare the benefits of online and in-person English lessons to find the format that suits your learning style.',
            date: '2024-02-15',
            category: 'Learning Tips',
            readTime: '5 min read',
            featured: false
        }
    ];

    const categories = [
        'All Posts',
        'Teaching Methods',
        'Learning Strategies',
        'Exam Preparation',
        'Speaking Skills',
        'Teaching Philosophy',
        'Learning Tips'
    ];

    const [selectedCategory, setSelectedCategory] = React.useState('All Posts');

    const filteredMaterials = selectedCategory === 'All Posts'
        ? materials
        : materials.filter(material => material.category === selectedCategory);

    const featuredMaterials = materials.filter(material => material.featured);

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

            {/* Featured Materials */}
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
                    <div className="featured-grid">
                        {featuredMaterials.map((material, index) => (
                            <motion.article
                                key={material.id}
                                className="featured-material-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="material-image">
                                    <div className="image-placeholder">
                                        📚 Teaching Material
                                    </div>
                                    <span className="featured-badge">Featured</span>
                                </div>
                                <div className="material-content">
                                    <div className="material-meta">
                                        <span className="material-category">{material.category}</span>
                                        <span className="material-date">{new Date(material.date).toLocaleDateString()}</span>
                                        <span className="material-read-time">{material.readTime}</span>
                                    </div>
                                    <h3>{material.title}</h3>
                                    <p>{material.excerpt}</p>
                                    <Link to={`/teaching-materials/${material.id}`} className="read-more-link">
                                        Read More →
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Materials */}
            <section className="materials-posts section bg-light">
                <div className="container">
                    {/* Category Filter */}
                    <motion.div
                        className="category-filter"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Browse by Category</h3>
                        <div className="category-buttons">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Materials Grid */}
                    <div className="materials-grid">
                        {filteredMaterials.map((material, index) => (
                            <motion.article
                                key={material.id}
                                className="material-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="material-image">
                                    <div className="image-placeholder">
                                        📖 Article Image
                                    </div>
                                </div>
                                <div className="material-content">
                                    <div className="material-meta">
                                        <span className="material-category">{material.category}</span>
                                        <span className="material-date">{new Date(material.date).toLocaleDateString()}</span>
                                        <span className="material-read-time">{material.readTime}</span>
                                    </div>
                                    <h4>{material.title}</h4>
                                    <p>{material.excerpt}</p>
                                    <Link to={`/teaching-materials/${material.id}`} className="read-more-link">
                                        Read Article →
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Materials CTA */}
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
                            <Link to="/services" className="btn btn-secondary">
                                View Course Types
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Coming Soon Notice */}
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
                            I'm currently working on creating valuable content for this section. In the meantime,
                            you can find my quick English tips and mini-lessons on Instagram
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