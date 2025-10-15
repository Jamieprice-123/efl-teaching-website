import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import { motion } from 'framer-motion';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const { logout, content, updateContent, addTeachingMaterial, updateTeachingMaterial, deleteTeachingMaterial } = useAdmin();
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('home');
    const [editedContent, setEditedContent] = useState(content);
    const [saveMessage, setSaveMessage] = useState('');

    // New state for teaching materials form
    const [newMaterial, setNewMaterial] = useState({
        title: '',
        link: '',
        description: '',
        category: ''
    });
    const [editingMaterialId, setEditingMaterialId] = useState(null);

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    const handleSave = () => {
        Object.keys(editedContent).forEach(section => {
            if (section === 'teachingMaterials') return; // Skip teaching materials
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

    // Teaching Materials handlers
    const handleAddMaterial = () => {
        if (newMaterial.title && newMaterial.link && newMaterial.description && newMaterial.category) {
            addTeachingMaterial(newMaterial);
            setNewMaterial({ title: '', link: '', description: '', category: '' });
            setSaveMessage('Material added successfully!');
            setTimeout(() => setSaveMessage(''), 3000);
        } else {
            alert('Please fill in all fields');
        }
    };

    const handleEditMaterial = (material) => {
        setEditingMaterialId(material.id);
        setNewMaterial({
            title: material.title,
            link: material.link,
            description: material.description,
            category: material.category
        });
    };

    const handleUpdateMaterial = () => {
        if (newMaterial.title && newMaterial.link && newMaterial.description && newMaterial.category) {
            updateTeachingMaterial(editingMaterialId, newMaterial);
            setEditingMaterialId(null);
            setNewMaterial({ title: '', link: '', description: '', category: '' });
            setSaveMessage('Material updated successfully!');
            setTimeout(() => setSaveMessage(''), 3000);
        }
    };

    const handleCancelEdit = () => {
        setEditingMaterialId(null);
        setNewMaterial({ title: '', link: '', description: '', category: '' });
    };

    const handleDeleteMaterial = (id) => {
        if (window.confirm('Are you sure you want to delete this material?')) {
            deleteTeachingMaterial(id);
            setSaveMessage('Material deleted successfully!');
            setTimeout(() => setSaveMessage(''), 3000);
        }
    };

    const renderEditor = () => {
        if (activeSection === 'teachingMaterials') {
            return (
                <div className="teaching-materials-editor">
                    <div className="materials-form-section">
                        <h3>{editingMaterialId ? 'Edit Material' : 'Add New Material'}</h3>
                        <div className="content-group">
                            <div className="form-group">
                                <label>Title *</label>
                                <input
                                    type="text"
                                    value={newMaterial.title}
                                    onChange={(e) => setNewMaterial({...newMaterial, title: e.target.value})}
                                    className="form-input"
                                    placeholder="e.g., The Golden Rules of English"
                                />
                            </div>
                            <div className="form-group">
                                <label>URL/Link *</label>
                                <input
                                    type="url"
                                    value={newMaterial.link}
                                    onChange={(e) => setNewMaterial({...newMaterial, link: e.target.value})}
                                    className="form-input"
                                    placeholder="https://..."
                                />
                            </div>
                            <div className="form-group">
                                <label>Category *</label>
                                <input
                                    type="text"
                                    value={newMaterial.category}
                                    onChange={(e) => setNewMaterial({...newMaterial, category: e.target.value})}
                                    className="form-input"
                                    placeholder="e.g., Grammar Rules, Pronunciation, Vocabulary"
                                />
                            </div>
                            <div className="form-group">
                                <label>Description *</label>
                                <textarea
                                    value={newMaterial.description}
                                    onChange={(e) => setNewMaterial({...newMaterial, description: e.target.value})}
                                    className="form-textarea"
                                    rows="4"
                                    placeholder="Brief description of the material..."
                                />
                            </div>
                            <div className="material-form-actions">
                                {editingMaterialId ? (
                                    <>
                                        <button onClick={handleUpdateMaterial} className="btn btn-primary">
                                            Update Material
                                        </button>
                                        <button onClick={handleCancelEdit} className="btn btn-secondary">
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <button onClick={handleAddMaterial} className="btn btn-primary">
                                        Add Material
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="materials-list-section">
                        <h3>Current Materials ({content.teachingMaterials?.length || 0})</h3>
                        <div className="materials-list">
                            {content.teachingMaterials?.map((material) => (
                                <div key={material.id} className="material-item-admin">
                                    <div className="material-item-header">
                                        <h4>{material.title}</h4>
                                        <span className="material-category-badge">{material.category}</span>
                                    </div>
                                    <p className="material-description">{material.description}</p>
                                    <a href={material.link} target="_blank" rel="noopener noreferrer" className="material-link">
                                        {material.link}
                                    </a>
                                    <div className="material-item-actions">
                                        <button onClick={() => handleEditMaterial(material)} className="btn-edit">
                                            Edit
                                        </button>
                                        <button onClick={() => handleDeleteMaterial(material.id)} className="btn-delete">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

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
                                        My Classes Page
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={activeSection === 'teachingMaterials' ? 'active' : ''}
                                        onClick={() => setActiveSection('teachingMaterials')}
                                    >
                                        Teaching Materials
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

                                {activeSection !== 'teachingMaterials' && (
                                    <div className="editor-actions">
                                        <button onClick={handleSave} className="btn btn-primary">
                                            Save Changes
                                        </button>
                                    </div>
                                )}
                            </motion.div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;