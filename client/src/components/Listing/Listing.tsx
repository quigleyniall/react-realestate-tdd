import React from 'react';
import PropTypes from 'prop-types';
import { IListing } from '../../interfaces';

interface ListingProps {
  listing: IListing
}

const Listing = ({ listing }: ListingProps) => (
  <div>{listing.price} and {listing.img_url}</div>
)

Listing.propTypes = {
  listing: PropTypes.shape({
    img_url: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })
}

export default Listing;