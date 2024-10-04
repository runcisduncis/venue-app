import React from 'react';
import { useParams, Link } from 'react-router-dom';
import venues from '../data/venues';

function VenueDetailPage() {
  const { venueId } = useParams();
  const venue = venues.find((v) => v.id === venueId);

  if (!venue) {
    return <div>Venue not found</div>;
  }

  return (
    <div>
      <h2>{venue.name}</h2>
      <div className="gallery">
        {venue.images.map((image, index) => (
          <img key={index} src={image} alt={`${venue.name} ${index}`} />
        ))}
      </div>
      <p>{venue.description}</p>
      <p>
        Contact: {venue.contact.phone}, {venue.contact.email},{' '}
        {venue.contact.address}
      </p>
      <Link to={`/reserve/${venue.id}`} className="reserve-button">
        Rezervēt
      </Link>
    </div>
  );
}

export default VenueDetailPage;
