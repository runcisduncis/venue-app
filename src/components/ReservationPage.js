import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import venues from '../data/venues';

function ReservationPage() {
  const { venueId } = useParams();
  const venue = venues.find((v) => v.id === venueId);
  const [selectedDate, setSelectedDate] = useState('');

  const handleReserve = () => {
    alert(`You have reserved ${venue.name} on ${selectedDate}`);
  };

  return (
    <div>
      <h2>Reserve {venue.name}</h2>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <button onClick={handleReserve} disabled={!selectedDate}>
        Confirm Reservation
      </button>
    </div>
  );
}

export default ReservationPage;
