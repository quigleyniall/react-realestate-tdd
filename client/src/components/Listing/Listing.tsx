/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { ListingResponse } from '../../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath } from '@fortawesome/free-solid-svg-icons';

interface ListingProps {
  listing: ListingResponse;
  setActiveListing: Function;
}

const Listing = ({ listing, setActiveListing }: ListingProps) => {
  return (
    <div
      className="card"
      style={{ width: '15rem', marginBottom: '2rem', cursor: 'pointer' }}
      onMouseEnter={() => setActiveListing(listing)}
      onMouseLeave={() => setActiveListing({})}
    >
      <img
        src={listing.img_url}
        className="card-img-top"
        alt={listing.lister_url}
      />
      <div className="card-body">
        <h5 className="card-title">{listing.price_formatted}</h5>
        <p className="card-text">{listing.title}</p>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faBed} className="mr-2" />
          <span className="text-muted mr-2">{listing.bedroom_number}</span>
          <FontAwesomeIcon icon={faBath} className="mr-2" />
          <span className="text-muted">
            {listing.bathroom_number ? listing.bathroom_number : 1}
          </span>
        </div>
      </div>
    </div>
  );
};

Listing.propTypes = {
  listing: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
    price_formatted: PropTypes.string.isRequired
  })
};

export default Listing;
