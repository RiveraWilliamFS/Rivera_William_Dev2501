import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './DetailsPageDesign.css';

const DetailsPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { breed, image } = location.state || {};
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        setSearchHistory(savedHistory);

        if (breed && image) {
            const alreadyExists = savedHistory.some((item) => item.breed.name === breed.name);
            if (!alreadyExists) {
                const updatedHistory = [...savedHistory, { breed, image }];
                setSearchHistory(updatedHistory);
                localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
            }
        }
    }, [breed, image]);

    return (
        <div className="details-container">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid d-flex justify-content-around">
                    <button className="btn btn-outline-light" onClick={() => navigate('/')}>Home</button>
                    <button className="btn btn-outline-light" onClick={() => navigate('/search')}>Search</button>
                    <button className="btn btn-outline-light" onClick={() => navigate('/details')}>Details</button>
                    <button className="btn btn-outline-light" onClick={() => navigate('/settings')}>Settings</button>
                </div>
            </nav>

            <main className="details-content container">
                {breed && image ? (
                    <div className="details-card card">
                        <img src={image} alt={breed.name} className="card-img-top rounded" />
                        <div className="card-body">
                            <h5 className="card-title">{breed.name}</h5>
                            <p><strong>Weight:</strong> {breed.weight?.metric || 'N/A'} kg</p>
                            <p><strong>Height:</strong> {breed.height?.metric || 'N/A'} cm</p>
                            <p><strong>Temperament:</strong> {breed.temperament || 'N/A'}</p>
                            <p>{breed.description || 'Description not available.'}</p>
                        </div>
                    </div>
                ) : (
                    <h5 className="text-muted">No breed selected. Please go back and select one.</h5>
                )}

                <div className="search-history">
                    <h2 className="text-center mb-4">Search History</h2>
                    <div className="row justify-content-center">
                        {searchHistory.map((item, index) => (
                            <div key={index} className="col-md-3 col-sm-6 mb-4">
                                <div className="history-card card shadow-sm">
                                    <img src={item.image} alt={item.breed.name} className="card-img-top rounded" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{item.breed.name}</h5>
                                        <p><strong>Weight:</strong> {item.breed.weight?.metric || 'N/A'} kg</p>
                                        <p><strong>Height:</strong> {item.breed.height?.metric || 'N/A'} cm</p>
                                        <p><strong>Temperament:</strong> {item.breed.temperament || 'N/A'}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DetailsPage;
