import React, { useState } from 'react';
import venues from '../data/venues';

function TimeBasedSearch() {
  const [date, setDate] = useState('');
  const [availableVenues, setAvailableVenues] = useState([]);

  const handleSearch = () => {
    const results = venues.filter((venue) =>
      venue.availability.includes(date)
    );
    setAvailableVenues(results);
  };

  return (
    <div>
      <h2>Search Venues by Date</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="venue-list">
        {availableVenues.map((venue) => (
          <div key={venue.id} className="venue-card">
            <img src={venue.images[0]} alt={venue.name} />
            <h3>{venue.name}</h3>
            <Link to={`/venue/${venue.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimeBasedSearch;
