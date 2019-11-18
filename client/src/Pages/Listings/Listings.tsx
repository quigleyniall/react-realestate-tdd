import React from 'react';
import ListingSearchBar from '../../containers/ListingSearchBar';
import PropertyListing from '../../containers/PropertyListings';
import Map from '../../components/Map';

const Listings = () => {
  return (
    <div data-test="listings" style={{ height: '100vh' }}>
      <ListingSearchBar data-test="listing-search-input" />
      <div className="d-flex">
        <div className="col-md-6">
          <PropertyListing data-test="property-listings" />
        </div>
        <div className="col-md-6" style={{ height: '600px' }}>
          <Map data-test="map" />
        </div>
      </div>
    </div>
  );
};

export default Listings;
