import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import SearchPage from './routes/SearchPage';
import DetailsPage from './routes/DetailsPage';
import SettingsPage from './routes/SettingsPage';
import DogGallery from './DogGallery';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/details" element={<DetailsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/gallery" element={<DogGallery />} />
            </Routes>
        </Router>
    );
}

export default App;
