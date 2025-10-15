import React from 'react';
import { useDarkMode } from '../../context/DarkModeContext';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button
            className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`}
            onClick={toggleDarkMode}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        >
            <div className="toggle-container">
                <div className="toggle-slider">
                    <span className="toggle-icon sun">☀️</span>
                    <span className="toggle-icon moon">🌙</span>
                </div>
            </div>
        </button>
    );
};

export default DarkModeToggle;