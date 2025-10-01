import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import { motion } from 'framer-motion';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const { logout, content, updateContent } = useAdmin();
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('home');
    const [editedContent, setEditedContent] = useState(content);
    const [saveMessage, setSaveMessage] = useState('');

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    const handleSave = () => {
        Object.keys(editedContent).forEach(section => {
            Object.keys(editedContent[section]).forEach(field => {
                if (typeof editedContent[section][field] === 'object') {
                    Object.keys(editedContent[section][field]).forEach(subField => {
                        updateContent(section, `${field}.${subField}`, editedContent[section][field][subField]);
                    });
                } else {
                    updateContent(section, field, editedContent[section][field]);
                }
            });
        });
        setSaveMessage('Changes saved successfully!');
        setTimeout(() => setSaveMessage(''), 3000);
    };

    const handleChange = (section, field, subField, value) => {
        setEditedContent(prev => {
            const newContent = { ...prev };
            if (subField) {
                newContent[section] = {
                    ...newContent[section],
                    [field]: {
                        ...newContent[section][field],
                        [subField]: value
                    }
                };
            } else {
                newContent[section] = {
                    ...newContent[section],
                    [field]: value
                };
            }
            return newContent;
        });
    };

    const renderEditor = () => {
        const sectionContent = editedContent[activeSection];
        if (!sectionContent) return null;

        return Object.keys(sectionContent).map(field => {
            if (typeof sectionContent[field] === 'object') {
                return (
                    <div key={field} className="content-group">
                        <h4>{field.charAt(0).toUpperCase() + field.slice(1)}</h4>
                        {Object.keys(sectionContent[field]).map(subField => (
                            <div key={subField} className="form-group">
                                <label>{subField.charAt(0).toUpperCase() + subField.slice(1).replace(/([A-Z])/g, ' $1')}</label>
                                <textarea
                                    value={sectionContent[field][subField]}
                                    onChange={(e) => handleChange(activeSection, field, subField, e.target.value)}
                                    className="form-textarea"
                                    rows="3"
                                />
                            </div>
                        ))}
                    </div>
                );
            }

            return (
                <div key={field} className="form-group">
                    <label>{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}</label>
                    <textarea
                        value={sectionContent[field]}
                        onChange={(e) => handleChange(activeSection, field, null, e.target.value)}
                        className="form-textarea"
                        rows="3"
                    />
                </div>
            );
        });
    };

    return (
        <div className="admin-dashboard">
            <div className="admin-header">
                <div className="container">
                    <div className="admin-header-content">
                        <h1>Admin Dashboard</h1>
                        <button onClick={handleLogout} className="btn btn-secondary">
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            <div className="admin-content">
                <div className="container">
                    <div className="dashboard-layout">
                        <aside className="section-nav">
                            <h3>Edit Sections</h3>
                            <ul>
                                <li>
                                    <button
                                        className={activeSection === 'home' ? 'active' : ''}
                                        onClick={() => setActiveSection('home')}
                                    >
                                        Home Page
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={activeSection === 'about' ? 'active' : ''}
                                        onClick={() => setActiveSection('about')}
                                    >
                                        About Page
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={activeSection === 'services' ? 'active' : ''}
                                        onClick={() => setActiveSection('services')}
                                    >
                                        Services Page
                                    </button>
                                </li>
                            </ul>
                        </aside>

                        <main className="editor-area">
                            <motion.div
                                key={activeSection}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="editor-header">
                                    <h2>Edit {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Content</h2>
                                    {saveMessage && <div className="save-message">{saveMessage}</div>}
                                </div>

                                <div className="editor-form">
                                    {renderEditor()}
                                </div>

                                <div className="editor-actions">
                                    <button onClick={handleSave} className="btn btn-primary">
                                        Save Changes
                                    </button>
                                </div>
                            </motion.div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;