import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (context === undefined) {
        throw new Error('useAdmin must be used within an AdminProvider');
    }
    return context;
};

const defaultContent = {
    home: {
        hero: {
            title: 'Learn English with English Teacher Rose',
            subtitle:
                "Transform your English skills with holistic language teaching that targets your interests. Teaching experience since 2013, CELTA certified, and a Master's in Linguistics from the University of Santiago de Compostela.",
        },
        stats: {
            yearsTeaching: 'Teaching experience since 2013',
            studentsTaught: '2000+',
            levels: 'A1-C2',
            format: '100%',
        },
    },
    about: {
        intro:
            "Hello! I'm Rosamund Scott, but you can call me Rose. I'm from Northern Ireland and I have teaching experience since 2013 in language schools in Spain, as well as a year working as a self-employed teacher in Barcelona. In 2025, I moved to England, and now I have my own website! I am very excited to be able to offer group courses now, thanks to this.",
        philosophy:
            "I tap into my students' interests to create an inclusive, relaxed class environment that promotes learning. Whether you love books, podcasts, or TV series, we'll use what you enjoy to improve your English.",
    },
    services: {
        pageTitle: 'Course Types',
        subtitle:
            'Comprehensive English instruction tailored to your goals, interests, and schedule',
        formatNote: '*Any of these course styles can be studied as an individual or a group',
    },
    teachingMaterials: [
        {
            id: 1,
            title: 'The Golden Rules of English',
            link: 'https://docs.google.com/document/d/1EIPl3hduP6Xx9-yutB_xO3127i0E-uy0Mh4JhPklbxU/edit?usp=sharing',
            description:
                'My students often complain about English being very irregular and not having any stable rules to follow, so I like to remind them periodically of these tried-and-tested rules that I grouped together from different sources and observations.',
            category: 'Grammar Rules',
        },
        {
            id: 2,
            title: 'Pronunciation of the Alphabet in English',
            link: 'https://docs.google.com/document/d/1sjjIRCuvJj_tFEN6E5a4QauoedmMXziraTNU6lUQunw/edit?usp=sharing',
            description:
                "The English alphabet can be very tricky for a lot of students, especially distinguishing between 'e' and 'i'. This guide helps clarify the pronunciation of each letter.",
            category: 'Pronunciation',
        },
    ],
};

export const AdminProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('adminAuthenticated') === 'true';
    });

    const [content, setContent] = useState(() => {
        const savedContent = localStorage.getItem('siteContent');
        if (savedContent) {
            try {
                const parsed = JSON.parse(savedContent);
                // Merge defaults with saved content to avoid missing properties
                return {
                    ...defaultContent,
                    ...parsed,
                    teachingMaterials:
                        parsed.teachingMaterials && Array.isArray(parsed.teachingMaterials)
                            ? parsed.teachingMaterials
                            : defaultContent.teachingMaterials,
                };
            } catch (err) {
                console.error('Error parsing saved siteContent:', err);
                return defaultContent;
            }
        }
        return defaultContent;
    });

    useEffect(() => {
        localStorage.setItem('siteContent', JSON.stringify(content));
    }, [content]);

    // --- Authentication ---
    const login = (password) => {
        if (password === 'Rose2025Admin!') {
            setIsAuthenticated(true);
            localStorage.setItem('adminAuthenticated', 'true');
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('adminAuthenticated');
    };

    // --- General Content Updater ---
    const updateContent = (section, field, value) => {
        setContent((prevContent) => {
            const newContent = { ...prevContent };
            const keys = field.split('.');
            let current = newContent[section];

            for (let i = 0; i < keys.length - 1; i++) {
                current = current[keys[i]];
            }

            current[keys[keys.length - 1]] = value;
            return newContent;
        });
    };

    // --- Teaching Materials CRUD ---
    const addTeachingMaterial = (material) => {
        setContent((prevContent) => ({
            ...prevContent,
            teachingMaterials: [
                ...(prevContent.teachingMaterials || []),
                { ...material, id: Date.now() },
            ],
        }));
    };

    const updateTeachingMaterial = (id, updatedMaterial) => {
        setContent((prevContent) => ({
            ...prevContent,
            teachingMaterials: (prevContent.teachingMaterials || []).map((material) =>
                material.id === id ? { ...material, ...updatedMaterial } : material
            ),
        }));
    };

    const deleteTeachingMaterial = (id) => {
        setContent((prevContent) => ({
            ...prevContent,
            teachingMaterials: (prevContent.teachingMaterials || []).filter(
                (material) => material.id !== id
            ),
        }));
    };

    const value = {
        isAuthenticated,
        login,
        logout,
        content,
        updateContent,
        addTeachingMaterial,
        updateTeachingMaterial,
        deleteTeachingMaterial,
    };

    return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};
