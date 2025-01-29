import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePageDesign.css';
import useDarkMode from '../hooks/useDarkMode';
import thrasherImage from '../images/thrasher.jpeg';

const HomePage = () => {
    useDarkMode(); 
    const navigate = useNavigate();

    const [dogFact, setDogFact] = useState('Loading dog fact...');

    useEffect(() => {
        const fetchDogFact = async () => {
            try {
                const response = await fetch('https://dog-api.kinduff.com/api/facts');
                const data = await response.json();
                if (response.ok && data.facts && data.facts.length > 0) {
                    setDogFact(data.facts[0]);
                } else {
                    setDogFact('Could not fetch a dog fact at this time.');
                }
            } catch (error) {
                console.error('Error fetching dog fact:', error);
                setDogFact('Failed to fetch dog fact.');
            }
        };

        fetchDogFact();

        const interval = setInterval(() => {
            fetchDogFact();
        }, 7000);

        return () => clearInterval(interval); 
    }, []);

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
                {/* Fun Facts Section */}
                <div className="fun-facts">
                    <h2>Did You Know?</h2>
                    <p>{dogFact}</p>
                </div>

                {/* Circle Image Section */}
                <div className="circle-image">
                    <img src={thrasherImage} alt="Dog next to lake" className="circle" />
                    <h1 className="main-heading">Let's look up some dogs, shall we?</h1>
                    <button className="start-button" onClick={handleStartClick}>
                        Start
                    </button>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
