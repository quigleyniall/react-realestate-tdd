import React from 'react';
import SearchBar from './containers/SearchBar';
import './App.css';
import PropertyListing from './containers/PropertyListings/PropertyListing';

const App = () => (
  <div data-test="app" className="row">
    <div className="col-md-12">
      <SearchBar />
      <PropertyListing />
    </div>
  </div>
);

export default App;
