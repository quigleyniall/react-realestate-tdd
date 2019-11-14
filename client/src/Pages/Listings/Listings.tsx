import React from 'react';
import ListingSearchBar from '../../containers/ListingSearchBar';
import PropertyListing from '../../containers/PropertyListings';

const Listings = () => {
  return (
    <div data-test="listings">
      <ListingSearchBar data-test="listing-search-input" />
      <PropertyListing data-test="property-listings" />
    </div>
  );
};

export default Listings;
