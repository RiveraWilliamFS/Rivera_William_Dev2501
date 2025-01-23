import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchPageDesign.css';

const SearchPage = () => {
    const navigate = useNavigate();

    return (
        <div className="search-container">
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
            
        </div>
    );
};

export default SearchPage;

