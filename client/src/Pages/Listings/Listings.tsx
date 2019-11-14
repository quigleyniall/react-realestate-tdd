import React from 'react';
import ListingSearchBar from '../../containers/ListingSearchBar';
import PropertyListing from '../../containers/PropertyListings';

class Listings extends React.Component {
  render() {
    return (
      <div>
        <ListingSearchBar />
        <PropertyListing />
      </div>
    );
  }
}

export default Listings;
