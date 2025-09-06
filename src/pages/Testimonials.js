import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'María González',
            level: 'Advanced Student (C1)',
            text: 'Rose\'s teaching style is amazing! Her project courses helped me improve my English while studying topics I actually enjoy. The book club was particularly engaging.',
            rating: 5
        },
        {
            name: 'Pierre Dubois',
            level: 'Intermediate Student (B2)',
            text: 'The holistic approach really works. I feel much more confident speaking English after just 3 months. Rose makes learning feel natural and enjoyable.',
            rating: 5
        },
        {
            name: 'Anna Schmidt',
            level: 'Exam Preparation',
            text: 'Thanks to Rose, I passed my Cambridge C1 exam with flying colors! Her exam preparation courses are incredibly thorough and well-structured.',
            rating: 5
        },
        {
            name: 'Carlos Rodriguez',
            level: 'Business English',
            text: 'Rose helped me improve my professional English for work. Her one-on-one lessons were perfectly tailored to my industry needs.',
            rating: 5
        },
        {
            name: 'Sophie Laurent',
            level: 'Conversation Student',
            text: 'The conversation classes are fantastic! Rose creates such a comfortable environment where I feel confident to speak and make mistakes.',
            rating: 5
        },
        {
            name: 'Marco Rossi',
            level: 'Project Course Student',
            text: 'The podcast club was a brilliant idea! I improved my listening skills while exploring topics I love. Rose\'s teaching methods are truly unique.',
            rating: 5
        },
        {
            name: 'Elena Popović',
            level: 'Group Class Student',
            text: 'Learning in Rose\'s group classes has been wonderful. The international mix of students makes every lesson interesting and culturally enriching.',
            rating: 5
        },
        {
            name: 'Ahmed Hassan',
            level: 'IELTS Preparation',
            text: 'Rose\'s IELTS preparation course was exactly what I needed. Her structured approach and practice materials helped me achieve my target score.',
            rating: 5
        }
    ];

    const successStories = [
        {
            student: 'María González',
            before: 'B2 Upper Intermediate',
            after: 'C1 Advanced',
            achievement: 'Passed Cambridge C1 Advanced exam',
            story: 'María joined my book club project course and improved her English while reading contemporary novels. Her vocabulary and analytical skills improved dramatically.'
        },
        {
            student: 'Pierre Dubois',
            before: 'A2 Elementary',
            after: 'B2 Upper Intermediate',
            achievement: 'Career advancement in international company',
            story: 'Pierre started with basic English and through consistent one-on-one lessons and conversation practice, he\'s now confidently leading international meetings.'
        },
        {
            student: 'Anna Schmidt',
            before: 'B2 Upper Intermediate',
            after: 'C1 Advanced',
            achievement: 'University admission in UK',
            story: 'Anna needed C1 level for university admission. Through intensive exam preparation and academic English focus, she achieved her goals and is now studying in Manchester.'
        }
    ];

    return (
        <div className="testimonials">
            {/* Hero Section */}
            <section className="testimonials-hero">
                <div className="container">
                    <motion.div
                        className="testimonials-hero-content"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Student Success Stories</h1>
                        <p className="testimonials-subtitle">
                            Discover how my holistic teaching approach has helped students from around the world achieve their English goals
                        </p>
                        <p className="testimonials-description">
                            From passing challenging exams to advancing careers, my students' success is my greatest achievement.
                            Here's what they have to say about their learning journey with me.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="testimonials-grid-section section">
                <div className="container">
                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <TestimonialCard testimonial={testimonial} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="success-stories section bg-light">
                <div className="container">
                    <motion.div
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Student Success Stories</h2>
                        <p>Real progress from real students - see how far they've come</p>
                    </motion.div>
                    <div className="success-stories-grid">
                        {successStories.map((story, index) => (
                            <motion.div
                                key={index}
                                className="success-story-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="story-header">
                                    <h3>{story.student}</h3>
                                    <div className="progress-indicator">
                                        <span className="level-before">{story.before}</span>
                                        <span className="progress-arrow">→</span>
                                        <span className="level-after">{story.after}</span>
                                    </div>
                                </div>
                                <div className="achievement">
                                    <h4>🎯 Achievement: {story.achievement}</h4>
                                </div>
                                <p className="story-text">{story.story}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="testimonials-cta section">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>Ready to Write Your Success Story?</h2>
                        <p>
                            Join the growing community of students who have transformed their English skills
                            with personalized, engaging instruction. Your success story could be next!
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary">
                                Start Your Journey
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

export default Testimonials;