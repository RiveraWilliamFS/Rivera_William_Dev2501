import React, { useState, useEffect } from 'react';
import './SettingsPageDesign.css';

const SettingsPage = () => {
    const [showContactModal, setShowContactModal] = useState(false);
    const [showTermsModal, setShowTermsModal] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedPreference = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(savedPreference);

        if (savedPreference) {
            document.body.classList.add('dark-mode');
        }
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);

        if (newMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }

        localStorage.setItem('darkMode', newMode);
    };

    return (
        <div className={`settings-container ${isDarkMode ? 'dark-mode' : ''}`}>
            <header className="navbar">
                <button className="nav-button" onClick={() => window.location.href = '/'}>
                    Home
                </button>
                <button className="nav-button" onClick={() => window.location.href = '/search'}>
                    Search
                </button>
                <button className="nav-button" onClick={() => window.location.href = '/details'}>
                    Details
                </button>
                <button className="nav-button" onClick={() => window.location.href = '/settings'}>
                    Settings
                </button>
            </header>
            <main className="settings-content">
                <div className="settings-box">
                    <button className="settings-button" onClick={toggleDarkMode}>
                        {isDarkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
                    </button>
                    <button className="settings-button" onClick={() => localStorage.clear()}>
                        Clear Details Page
                    </button>
                    <button className="settings-button" onClick={() => setShowContactModal(true)}>
                        Contact Us
                    </button>
                    <button className="settings-button" onClick={() => setShowTermsModal(true)}>
                        Terms and Conditions
                    </button>
                </div>
            </main>

            {showContactModal && (
                <div className="modal-overlay" onClick={() => setShowContactModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Contact Us</h2>
                        <p><strong>Phone:</strong> 800-226-7625</p>
                        <p><strong>Email:</strong> wdrivera@student.fullsail.edu</p>
                        <button className="close-button" onClick={() => setShowContactModal(false)}>Close</button>
                    </div>
                </div>
            )}

            {showTermsModal && (
                <div className="modal-overlay" onClick={() => setShowTermsModal(false)}>
                    <div className="modal-content terms-modal" onClick={(e) => e.stopPropagation()}>
                        <h2>Terms and Conditions</h2>
                        <p>
                            Your Online Terms and Conditions help protect you and your users. Be upfront and explain legally how your site works, what's okay, and what's not. This can include membership terms or what constitutes harassment on your site.
                        </p>
                        <p>Please read these terms carefully, and keep a copy for your reference.</p>
                        <h3>Privacy</h3>
                        <p>Your use of this website is subject to our Privacy Policy, which governs the Site and informs users of our data collection practices.</p>
                        <h3>Electronic Communications</h3>
                        <p>When you communicate with us electronically, you consent to receive communications from us electronically.</p>
                        <h3>Children Under Thirteen</h3>
                        <p>We do not knowingly collect information from children under the age of thirteen.</p>
                        <button className="close-button" onClick={() => setShowTermsModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SettingsPage;
