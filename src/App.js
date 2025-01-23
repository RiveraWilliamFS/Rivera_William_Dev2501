import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import SearchPage from './routes/SearchPage';
import DetailsPage from './routes/DetailsPage';
import SettingsPage from './routes/SettingsPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/details" element={<DetailsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
