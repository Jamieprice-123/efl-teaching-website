import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';
import './Testimonials.css';

const Testimonials = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('english');

    const testimonialsData = {
        english: [
            {
                name: 'Jan',
                level: 'Cambridge First Student',
                text: 'The classes worked really well for me. I came from another language academy looking for lessons that would fit my needs, and I really found that with Rose. She was a very good teacher, and the fact that the classes were only in small groups made learning much easier. And of course, in the end I passed the First, which was my main objective, so the experience gets a 10 out of 10.',
                rating: 5
            },
            {
                name: 'Laura',
                level: 'Upper-intermediate group student',
                text: 'The classes are dynamic; they keep you interested and motivated to keep learning. She\'s one of the best English teachers I\'ve ever had! Thank you very much, Rose!',
                rating: 5
            },
            {
                name: 'Montserrat',
                level: 'Intermediate Student',
                text: 'Very lively classes, and it\'s very easy to speak and interact.',
                rating: 5
            },
            {
                name: 'Mireia',
                level: 'Group Student',
                text: 'The classes are very dynamic and fun.',
                rating: 5
            },
            {
                name: 'Sara',
                level: 'B2.2 Student',
                text: 'She\'s a super teacher!!! She has helped me so much on my B2.2 course. It is so easy to understand her when she speaks, she\'s kind and follows the rhythm of her students. Usually she makes some games for us to not get bored, I appreciate this way to teach, it was very funny. I absolutely recommend her classes.',
                rating: 5
            },
            {
                name: 'Aurélie',
                level: 'Upper-intermediate group student',
                text: 'I\'ve loved the classes with Rosamund. She has exemplary teaching skills. She is very patient and very pleasant. Her classes are dynamic and fun. I\'ve made a lot of progress thanks to her.',
                rating: 5
            },
            {
                name: 'Blanca',
                level: 'General English Student',
                text: 'I really like the way she teaches, since she explains things as many times as necessary, among other things.',
                rating: 5
            },
            {
                name: 'Sergi',
                level: 'Exam preparation student',
                text: 'Working with Rose has been a very good experience. She is a very attentive and effective teacher, and she adapts the classes perfectly to each person. She also makes the material easy to understand.',
                rating: 5
            },
            {
                name: 'Mar',
                level: 'General English Student',
                text: 'She is a very good teacher; the classes go by quickly and learning English with her becomes more enjoyable. Without a doubt, one of the best English teachers I\'ve had.',
                rating: 5
            },
            {
                name: 'Hèlia',
                level: 'Advanced Student',
                text: 'Rose is very fun, she has a positive attitude and is very warm, which helps you want to keep doing English classes. I\'d highlight her ability to bring up interesting topics that let you practice speaking and writing in a different way, so you never get bored. She has a great ability to adapt to students\' needs (for exam preparation or focusing more on speaking/writing/grammar). She\'s also very flexible with schedules, which is appreciated when you have a complicated timetable. She works hard; you can tell she prepares materials to reinforce the points students struggle with most, and you can also contact her if you have doubts or questions. I still haven\'t got round to taking the CAE, so when I restart, I\'ll definitely ask her for more private lessons.',
                rating: 5
            },
            {
                name: 'Alex',
                level: 'Upper-intermediate group student',
                text: 'Rose is a very good teacher. She personally prepares each class for each student. 100% recommendable for any level from A1 to C1.',
                rating: 5
            },
            {
                name: 'Victoria',
                level: 'Group Student',
                text: 'Rose is a great teacher; she\'s always willing to help her students and to explain her lessons as many times as necessary. On top of that, she\'s a wonderful person. It\'s been a pleasure to have her as a teacher.',
                rating: 5
            },
            {
                name: 'Dani',
                level: 'Enthusiastic Student',
                text: 'She\'s the best!! A perfect 10 in everything!!',
                rating: 5
            },
            {
                name: 'Anna',
                level: 'Conversation Student',
                text: 'Rose is an incredible teacher! I did conversation classes with her because I needed to gain more confidence speaking English. Thanks to Rose I now speak English much more confidently. Rose always brings up interesting conversation topics or activities, she makes you feel very comfortable in her classes, which allows you to progress in learning with self-confidence. She also shows you many resources you can use between classes to keep learning. She\'s an outstanding English teacher! I wouldn\'t hesitate to book a class with her. You won\'t regret it.',
                rating: 5
            },
            {
                name: 'Leandro',
                level: 'Speaking Focus Student',
                text: 'She is an excellent teacher. She makes you speak a lot, and the classes go by very quickly because she makes them so enjoyable.',
                rating: 5
            }
        ],
        spanish: [
            {
                name: 'Jan',
                level: 'Estudiante de Cambridge First',
                text: 'Realmente me funcionaron muy bien las clases, me fui de otra academia buscando unas clases que se ajustasen a mis necesidades y realmente lo encontré. Rose fue una muy buena profesora y el hecho de que las clases fuesen solo en grupos pequeños facilitó mucho el aprendizaje. Y como no, al final el First está aprobado que era el objetivo principal por lo tanto un 10 la experiencia.',
                rating: 5
            },
            {
                name: 'Laura',
                level: 'Estudiante de grupo intermedio-alto',
                text: 'Las clases son dinámicas, hace que mantengas interés y ganas en seguir aprendiendo. Es una de las mejores profesoras de inglés que he tenido! Muchas gracias Rose!',
                rating: 5
            },
            {
                name: 'Sara',
                level: 'Estudiante B2.2',
                text: 'Es una súper profesora!!! Me ha ayudado muchísimo en mi curso B2.2. Es muy fácil entenderla cuando habla, es amable y sigue el ritmo de sus estudiantes. Normalmente hace algunos juegos para que no nos aburriéramos, aprecio esta forma de enseñar, fue muy divertido. Recomiendo absolutamente sus clases.',
                rating: 5
            },
            {
                name: 'Blanca',
                level: 'Estudiante de Inglés General',
                text: 'Me gusta mucho su forma de enseñar, ya que explica las cosas las veces que sean necesarias, entre otras cosas.',
                rating: 5
            },
            {
                name: 'Sergi',
                level: 'Estudiante de preparación de exámenes',
                text: 'Trabajar con Rose ha sido una muy buena experiencia. Es una profesora muy atenta y eficaz, y adapta las clases perfectamente a cada persona. También hace que el material sea fácil de entender.',
                rating: 5
            },
            {
                name: 'Mar',
                level: 'Estudiante de Inglés General',
                text: 'Es muy buena profesora; las clases pasan rápido y aprender inglés con ella se vuelve más ameno. Sin duda, una de las mejores profesoras de inglés que he tenido.',
                rating: 5
            }
        ],
        french: [
            {
                name: 'Jan',
                level: 'Étudiant Cambridge First',
                text: 'Les cours ont vraiment très bien fonctionné pour moi. Je venais d\'une autre école de langues à la recherche de cours qui répondraient à mes besoins, et c\'est exactement ce que j\'ai trouvé avec Rose. C\'était une très bonne professeure, et le fait que les cours aient lieu uniquement en petits groupes a beaucoup facilité l\'apprentissage. Et bien sûr, à la fin j\'ai réussi le First, qui était mon objectif principal — donc je donne à cette expérience un 10 sur 10.',
                rating: 5
            },
            {
                name: 'Laura',
                level: 'Étudiante de groupe intermédiaire-supérieur',
                text: 'Les cours sont dynamiques ; ils maintiennent votre intérêt et vous motivent à continuer d\'apprendre. C\'est l\'une des meilleures professeurs d\'anglais que j\'aie jamais eue ! Merci beaucoup, Rose !',
                rating: 5
            },
            {
                name: 'Aurélie',
                level: 'Étudiante de groupe intermédiaire-supérieur',
                text: 'J\'ai adoré les cours avec Rosamund. Elle a des compétences d\'enseignement exemplaires. Elle est très patiente et très agréable. Ses cours sont dynamiques et amusants. J\'ai fait beaucoup de progrès grâce à elle.',
                rating: 5
            },
            {
                name: 'Sara',
                level: 'Étudiante B2.2',
                text: 'C\'est une super professeure !!! Elle m\'a tellement aidée dans mon cours B2.2. Il est très facile de la comprendre quand elle parle, elle est gentille et suit le rythme de ses étudiants. Elle fait généralement des jeux pour qu\'on ne s\'ennuie pas, j\'apprécie cette façon d\'enseigner, c\'était très amusant. Je recommande absolument ses cours.',
                rating: 5
            }
        ],
        german: [
            {
                name: 'Jan',
                level: 'Cambridge First Student',
                text: 'Der Unterricht hat für mich wirklich sehr gut funktioniert. Ich kam von einer anderen Sprachschule und suchte nach Kursen, die zu meinen Bedürfnissen passten, und genau das habe ich bei Rose gefunden. Sie war eine sehr gute Lehrerin, und die Tatsache, dass der Unterricht nur in kleinen Gruppen stattfand, hat das Lernen viel erleichtert. Und natürlich habe ich am Ende das First bestanden, was mein Hauptziel war — deshalb bekommt die Erfahrung von mir eine glatte 10 von 10.',
                rating: 5
            },
            {
                name: 'Laura',
                level: 'Fortgeschrittene Gruppenstudentin',
                text: 'Der Unterricht ist dynamisch; er hält das Interesse aufrecht und motiviert zum Weiterlernen. Sie ist eine der besten Englischlehrerinnen, die ich je hatte! Vielen Dank, Rose!',
                rating: 5
            },
            {
                name: 'Sara',
                level: 'B2.2 Studentin',
                text: 'Sie ist eine super Lehrerin!!! Sie hat mir so sehr in meinem B2.2 Kurs geholfen. Es ist sehr einfach, sie zu verstehen, wenn sie spricht, sie ist freundlich und folgt dem Rhythmus ihrer Schüler. Normalerweise macht sie Spiele, damit wir uns nicht langweilen, ich schätze diese Art zu unterrichten, es war sehr lustig. Ich empfehle ihre Kurse absolut.',
                rating: 5
            }
        ],
        italian: [
            {
                name: 'Jan',
                level: 'Studente Cambridge First',
                text: 'Le lezioni hanno funzionato davvero molto bene per me. Venivo da un\'altra scuola di lingue alla ricerca di corsi che si adattassero alle mie esigenze, e li ho trovati proprio con Rose. È stata un\'ottima insegnante, e il fatto che le lezioni fossero solo in piccoli gruppi ha reso l\'apprendimento molto più semplice. E naturalmente, alla fine ho superato il First, che era il mio obiettivo principale — quindi do a questa esperienza un bel 10 su 10.',
                rating: 5
            },
            {
                name: 'Laura',
                level: 'Studentessa di gruppo intermedio-superiore',
                text: 'Le lezioni sono dinamiche; mantengono il tuo interesse e ti motivano a continuare ad imparare. È una delle migliori insegnanti di inglese che abbia mai avuto! Grazie mille, Rose!',
                rating: 5
            },
            {
                name: 'Sara',
                level: 'Studentessa B2.2',
                text: 'È una super insegnante!!! Mi ha aiutato moltissimo nel mio corso B2.2. È molto facile capirla quando parla, è gentile e segue il ritmo dei suoi studenti. Di solito fa dei giochi per non farci annoiare, apprezzo questo modo di insegnare, è stato molto divertente. Raccomando assolutamente le sue lezioni.',
                rating: 5
            }
        ]
    };

    const languageNames = {
        english: 'English',
        spanish: 'Español',
        french: 'Français',
        german: 'Deutsch',
        italian: 'Italiano'
    };

    const successStories = [
        {
            student: 'Jan',
            before: 'B1 Intermediate',
            after: 'B2 Upper Intermediate',
            achievement: 'Passed Cambridge First Certificate',
            story: 'Jan came from another academy seeking classes that fit his needs. Through small group lessons and focused preparation, he successfully passed his Cambridge First exam.'
        },
        {
            student: 'Sara',
            before: 'B1 Intermediate',
            after: 'B2.2 Upper Intermediate',
            achievement: 'Completed B2.2 course with confidence',
            story: 'Sara appreciated Rose\'s game-based learning approach and clear explanations. She found the classes fun and engaging while making solid progress.'
        },
        {
            student: 'Anna',
            before: 'B2 Upper Intermediate',
            after: 'C1 Advanced',
            achievement: 'Gained confidence in conversation skills',
            story: 'Anna needed to build confidence in speaking English. Through conversation classes focused on interesting topics, she now speaks English with much more confidence.'
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

            {/* Language Selection */}
            <section className="language-selection section">
                <div className="container">
                    <motion.div
                        className="language-selector"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Read testimonials in your language:</h3>
                        <div className="language-buttons">
                            {Object.keys(languageNames).map((lang) => (
                                <button
                                    key={lang}
                                    className={`language-btn ${selectedLanguage === lang ? 'active' : ''}`}
                                    onClick={() => setSelectedLanguage(lang)}
                                    data-lang={lang}
                                >
                                    {languageNames[lang]}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="testimonials-grid-section section bg-light">
                <div className="container">
                    <div className="testimonials-grid">
                        {testimonialsData[selectedLanguage].map((testimonial, index) => (
                            <motion.div
                                key={`${selectedLanguage}-${index}`}
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
            <section className="success-stories section">
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