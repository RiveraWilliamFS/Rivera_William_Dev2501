import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
            <nav className="navbar navbar-dark bg-dark d-flex justify-content-around py-2">
                <button className="btn btn-outline-light" onClick={() => navigate('/')}>
                    Home
                </button>
                <button className="btn btn-outline-light" onClick={() => navigate('/search')}>
                    Search
                </button>
                <button className="btn btn-outline-light" onClick={() => navigate('/details')}>
                    Details
                </button>
                <button className="btn btn-outline-light" onClick={() => navigate('/settings')}>
                    Settings
                </button>
            </nav>

            <main className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4">
                        <div className="fun-facts card shadow-sm p-3">
                            <h2 className="card-title">Did You Know?</h2>
                            <p className="card-text">{dogFact}</p>
                        </div>
                    </div>

                    <div className="col-md-6 text-center">
                        <div className="circle-image mb-4">
                            <img src={thrasherImage} alt="Dog next to lake" className="circle" />
                        </div>
                        <h1 className="main-heading">Let's look up some dogs, shall we?</h1>
                        <button className="start-button mt-3" onClick={handleStartClick}>
                            Start
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
