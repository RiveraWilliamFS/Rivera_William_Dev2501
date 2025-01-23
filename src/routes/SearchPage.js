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
                <button className="nav-button">Settings</button>
            </header>
            <main className="search-content">
                <h1 className="search-heading">Search a Breed of Dog</h1>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search"
                    />
                </div>
            </main>
        </div>
    );
};

export default SearchPage;
