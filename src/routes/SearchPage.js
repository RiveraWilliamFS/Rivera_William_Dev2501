import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';

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
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid d-flex justify-content-around">
                    <button className="btn btn-outline-light" onClick={() => navigate('/')}>Home</button>
                    <button className="btn btn-outline-light" onClick={() => navigate('/search')}>Search</button>
                    <button className="btn btn-outline-light" onClick={() => navigate('/details')}>Details</button>
                    <button className="btn btn-outline-light" onClick={() => navigate('/settings')}>Settings</button>
                </div>
            </nav>

            <main className="search-content container d-flex flex-column align-items-center justify-content-center text-center mt-5">
                <h1 className="text-dark mb-4">Search a Breed of Dog</h1>
                <form onSubmit={handleSearch} className="d-flex w-50 justify-content-center">
                    <input
                        type="text"
                        className="form-control rounded-pill me-3"
                        placeholder="Search"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                    />
                    <button type="submit" className="btn btn-dark rounded-pill px-4">Search</button>
                </form>
            </main>
        </div>
    );
};

export default SearchPage;
