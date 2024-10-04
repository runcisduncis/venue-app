import React from 'react';
import { useParams, Link } from 'react-router-dom';
import venues from '../data/venues';

function CategoryPage() {
  const { categoryId } = useParams();
  const categoryVenues = venues.filter(
    (venue) => venue.category === categoryId
  );

  return (
    <div>
      <h2>{categoryId.replace('-', ' ')}</h2>
      <div className="venue-list">
        {categoryVenues.map((venue) => (
          <div key={venue.id} className="venue-card">
            <img src={venue.images[0]} alt={venue.name} />
            <h3>{venue.name}</h3>
            <p>{venue.shortDescription}</p>
            <p>
              Contact: {venue.contact.phone}, {venue.contact.email},{' '}
              {venue.contact.address}
            </p>
            <Link to={`/venue/${venue.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
