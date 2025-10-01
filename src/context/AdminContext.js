import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (context === undefined) {
        throw new Error('useAdmin must be used within an AdminProvider');
    }
    return context;
};

// Default content structure
const defaultContent = {
    home: {
        hero: {
            title: 'Learn English with English Teacher Rose',
            subtitle: 'Transform your English skills with holistic language teaching that targets your interests. Teaching experience since 2013, CELTA certified, and a Master\'s in Linguistics from the University of Santiago de Compostela.',
        },
        stats: {
            yearsTeaching: 'Teaching experience since 2013',
            studentsTaught: '2000+',
            levels: 'A1-C2',
            format: '100%'
        }
    },
    about: {
        intro: 'Hello! I\'m Rosamund Scott, but you can call me Rose. I\'m from Northern Ireland and I have teaching experience since 2013 in language schools in Spain, as well as a year working as a self-employed teacher in Barcelona. In 2025, I moved to England, and now I have my own website! I am very excited to be able to offer group courses now, thanks to this.',
        philosophy: 'I tap into my students\' interests to create an inclusive, relaxed class environment that promotes learning. Whether you love books, podcasts, or TV series, we\'ll use what you enjoy to improve your English.',
    },
    services: {
        pageTitle: 'Course Types',
        subtitle: 'Comprehensive English instruction tailored to your goals, interests, and schedule',
        formatNote: '*Any of these course styles can be studied as an individual or a group',
    }
};

export const AdminProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('adminAuthenticated') === 'true';
    });

    const [content, setContent] = useState(() => {
        const savedContent = localStorage.getItem('siteContent');
        return savedContent ? JSON.parse(savedContent) : defaultContent;
    });

    useEffect(() => {
        localStorage.setItem('siteContent', JSON.stringify(content));
    }, [content]);

    const login = (password) => {
        // Simple password check - in production, use proper authentication
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

    const updateContent = (section, field, value) => {
        setContent(prevContent => {
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

    const value = {
        isAuthenticated,
        login,
        logout,
        content,
        updateContent
    };

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    );
};