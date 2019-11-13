import React from 'react';
import PropTypes from 'prop-types';
import { IListing } from '../../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBath } from '@fortawesome/free-solid-svg-icons';

interface ListingProps {
  listing: IListing
}

const Listing = ({ listing }: ListingProps) => {
  console.log(listing)
  return (
  <div className="card" style={{ width: "20rem", marginBottom: "2rem" }}>
    <img src={listing.img_url} className="card-img-top" alt={listing.lister_url} />
    <div className="card-body">
      <h5 className="card-title">{listing.price_formatted}</h5>
      <p className="card-text">{listing.title}</p>
      <div className="d-flex align-items-center">
        <FontAwesomeIcon icon={faBed} className="mr-2" />
        <span className="text-muted mr-2">{listing.bedroom_number}</span>
        <FontAwesomeIcon icon={faBath} className="mr-2" />
        <span className="text-muted">{listing.bathroom_number ? listing.bathroom_number : 1}</span>
      </div>
    </div>
  </div>
)}

Listing.propTypes = {
  listing: PropTypes.shape({
    title: PropTypes.string.isRequired,    
    img_url: PropTypes.string.isRequired,
    price_formatted: PropTypes.string.isRequired
  })
}

export default Listing;