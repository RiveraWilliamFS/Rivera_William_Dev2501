import React from 'react';
import './SettingsPageDesign.css';

const SettingsPage = () => {
    return (
        <div className="settings-container">
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
                    <button className="settings-button">Clear Details Page</button>
                    <button className="settings-button">Enable Dark Mode</button>
                    <button className="settings-button">Contact Us</button>
                    <button className="settings-button">Terms and Conditions</button>
                </div>
            </main>
        </div>
    );
};

export default SettingsPage;

