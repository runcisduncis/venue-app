import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import VenueDetailPage from './components/VenueDetailPage';
import ReservationPage from './components/ReservationPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/:categoryId" element={<CategoryPage />} />
      <Route path="/venue/:venueId" element={<VenueDetailPage />} />
      <Route path="/reserve/:venueId" element={<ReservationPage />} />
    </Routes>
  );
}

export default App;
