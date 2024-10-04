import React from 'react';
import { Link } from 'react-router-dom';
import categories from '../data/categories';
import venues from '../data/venues';
import Slideshow from './Slideshow';

function HomePage() {
  // Filter venues by category
  const categorizedVenues = (categoryId) =>
    venues.filter((venue) => venue.category === categoryId).slice(0, 5);

  return (
    <div>
      <Slideshow />
      <h2>Event Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>

      {/* Display venues for each category */}
      <h2>Child Birthday Venues</h2>
      <div className="venue-list">
        {categorizedVenues('child-parties').map((venue) => (
          <div key={venue.id} className="venue-card">
            <img src={venue.images[0]} alt={venue.name} />
            <h3>{venue.name}</h3>
            <p>{venue.shortDescription}</p>
            <Link to={`/venue/${venue.id}`}>View Details</Link>
          </div>
        ))}
      </div>

      <h2>Corporate Event Venues</h2>
      <div className="venue-list">
        {categorizedVenues('corporate-events').map((venue) => (
          <div key={venue.id} className="venue-card">
            <img src={venue.images[0]} alt={venue.name} />
            <h3>{venue.name}</h3>
            <p>{venue.shortDescription}</p>
            <Link to={`/venue/${venue.id}`}>View Details</Link>
          </div>
        ))}
      </div>

      <h2>Birthday Venues</h2>
      <div className="venue-list">
        {categorizedVenues('birthdays').map((venue) => (
          <div key={venue.id} className="venue-card">
            <img src={venue.images[0]} alt={venue.name} />
            <h3>{venue.name}</h3>
            <p>{venue.shortDescription}</p>
            <Link to={`/venue/${venue.id}`}>View Details</Link>
          </div>
        ))}
      </div>

      <h2>Bachelor/Bachelorette Night Venues</h2>
      <div className="venue-list">
        {categorizedVenues('bachelor-bachelorette-nights').map((venue) => (
          <div key={venue.id} className="venue-card">
            <img src={venue.images[0]} alt={venue.name} />
            <h3>{venue.name}</h3>
            <p>{venue.shortDescription}</p>
            <Link to={`/venue/${venue.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
