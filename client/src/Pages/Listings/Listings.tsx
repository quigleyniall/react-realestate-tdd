import React from 'react';
import ListingSearchBar from '../../containers/ListingSearchBar';
import PropertyListing from '../../containers/PropertyListings';
import Map from '../../components/Map';
import './Listings.scss';

const Listings = () => {
  return (
    <div data-test="listings" className="wrapper">
      <ListingSearchBar data-test="listing-search-input" />
      <div className="main-section">
        <div className="left-section">
          <PropertyListing data-test="property-listings" />
        </div>
        <div className="map-container">
          <Map data-test="map" />
        </div>
      </div>
    </div>
  );
};

export default Listings;
