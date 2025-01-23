import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePageDesign.css';
import thrasherImage from '../images/thrasher.jpeg';


const HomePage = () => {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/search');
    };

    return (
        <div className="home-container">
            <header className="navbar">
                <button className="nav-button" onClick={() => navigate('/')}>
                    Home
                </button>
                <button className="nav-button" onClick={() => navigate('/search')}>
                    Search
                </button>
                <button className="nav-button" onClick={() => navigate('/details')}>
                    Details
                </button>
                <button className="nav-button" onClick={() => navigate('/settings')}>
                    Settings
                </button>
            </header>
            <main className="main-content">
                <div className="circle-image">
                <img src={thrasherImage} alt="Dog next to lake" className="circle" />
                </div>
                <h1 className="main-heading">Let's look up some dogs, shall we?</h1>
                <button className="start-button" onClick={handleStartClick}>
                    Start
                </button>
            </main>
        </div>
    );
};

export default HomePage;
