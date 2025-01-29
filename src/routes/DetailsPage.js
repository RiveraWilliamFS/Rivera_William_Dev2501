import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';
import './DetailsPageDesign.css';

const DetailsPage = () => {
    useDarkMode(); 

    const location = useLocation();
    const navigate = useNavigate();
    const { breed, image } = location.state || {}; 
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        setSearchHistory(savedHistory);

        if (breed && image) {
            const alreadyExists = savedHistory.some(item => item.breed.name === breed.name);
            if (!alreadyExists) {
                const updatedHistory = [...savedHistory, { breed, image }];
                setSearchHistory(updatedHistory);
                localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
            }
        }
    }, [breed, image]);

    return (
        <div className="details-container">
            <header className="navbar">
                <button className="nav-button" onClick={() => navigate('/')}>Home</button>
                <button className="nav-button" onClick={() => navigate('/search')}>Search</button>
                <button className="nav-button" onClick={() => navigate('/details')}>Details</button>
                <button className="nav-button" onClick={() => navigate('/settings')}>Settings</button>
            </header>
            <main className="details-content">
                <div className="search-history">
                    <h2>Search History</h2>
                    {searchHistory.length > 0 ? (
                        <div className="history-cards">
                            {searchHistory.map((item, index) => (
                                <div key={index} className="history-card">
                                    <h3>{item.breed.name}</h3>
                                    <img src={item.image} alt={item.breed.name} className="history-image" />
                                    <p><strong>Weight:</strong> {item.breed.weight.metric} kg</p>
                                    <p><strong>Height:</strong> {item.breed.height.metric} cm</p>
                                    <p><strong>Temperament:</strong> {item.breed.temperament}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No search history yet.</p>
                    )}
                </div>
            </main>
        </div>
    );
};

export default DetailsPage;


