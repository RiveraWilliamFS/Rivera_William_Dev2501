import React, { useState, useEffect } from 'react';

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
        <div className={`settings-container vh-100 d-flex flex-column`}>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid d-flex justify-content-around">
                    <button className="btn btn-outline-light" onClick={() => window.location.href = '/'}>
                        Home
                    </button>
                    <button className="btn btn-outline-light" onClick={() => window.location.href = '/search'}>
                        Search
                    </button>
                    <button className="btn btn-outline-light" onClick={() => window.location.href = '/details'}>
                        Details
                    </button>
                    <button className="btn btn-outline-light" onClick={() => window.location.href = '/settings'}>
                        Settings
                    </button>
                </div>
            </nav>

            <main className="container d-flex flex-column align-items-center justify-content-center flex-grow-1">
                <div className="card shadow-lg p-4">
                    <div className="d-flex flex-column gap-3">
                        <button
                            className="btn btn-secondary"
                            onClick={toggleDarkMode}
                        >
                            {isDarkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => localStorage.clear()}
                        >
                            Clear Details Page
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => setShowContactModal(true)}
                        >
                            Contact Us
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => setShowTermsModal(true)}
                        >
                            Terms and Conditions
                        </button>
                    </div>
                </div>
            </main>

            {showContactModal && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Contact Us</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowContactModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p><strong>Phone:</strong> 800-226-7625</p>
                                <p><strong>Email:</strong> wdrivera@student.fullsail.edu</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-dark"
                                    onClick={() => setShowContactModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showTermsModal && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Terms and Conditions</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowTermsModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>
                                    Your Online Terms and Conditions help protect you and your users.
                                    Be upfront and explain legally how your site works, what's okay,
                                    and what's not.
                                </p>
                                <p>
                                    Please read these terms carefully, and keep a copy for your reference.
                                </p>
                                <h6>Privacy</h6>
                                <p>Your use of this website is subject to our Privacy Policy.</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-dark"
                                    onClick={() => setShowTermsModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SettingsPage;
