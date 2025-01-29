import React, { useState, useEffect } from 'react';

const DogGallery = () => {
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/dogs');
                const data = await response.json();
                setDogs(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching dog data:', error);
            }
        };

        fetchDogs();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Dog Gallery</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {dogs.map((dog, index) => (
                    <img
                        key={index}
                        src={dog.url}
                        alt={`Dog ${index + 1}`}
                        style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
                    />
                ))}
            </div>
        </div>
    );
};

export default DogGallery;
