import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';
import './SearchPageDesign.css';

const SearchPage = () => {
    useDarkMode(); 

    const [breed, setBreed] = useState(''); 
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault(); 

        try {
            const response = await fetch(`http://localhost:5001/api/dogs/search?breed=${breed}`);
            const data = await response.json();

            if (response.ok) {
                console.log(data); 
                navigate('/details', { state: data }); 
            } else {
                alert(data.message || 'Breed not found');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to fetch data. Please try again.');
        }
    };

    return (
        <div className="search-container">
            <header className="navbar">
                <button className="nav-button" onClick={() => navigate('/')}>Home</button>
                <button className="nav-button" onClick={() => navigate('/search')}>Search</button>
                <button className="nav-button" onClick={() => navigate('/details')}>Details</button>
                <button className="nav-button" onClick={() => navigate('/settings')}>Settings</button>
            </header>
            <main className="search-content">
                <h1 className="search-heading">Search a Breed of Dog</h1>
                <div className="search-box">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search"
                            value={breed}
                            onChange={(e) => setBreed(e.target.value)} 
                        />
                        <button type="submit" className="search-button">Search</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default SearchPage;
