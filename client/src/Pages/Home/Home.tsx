import React from 'react';
import SearchBar from '../../containers/SearchBar';
import PropertyListing from '../../containers/PropertyListings/PropertyListing';
import './Home.scss';

const Home = () => (
  <div data-test="app" className="wrapper">
    <div className="d-flex background align-items-center">
      <SearchBar />
    </div>
    <PropertyListing />
  </div>
);

export default Home;
