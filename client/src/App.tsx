import React from 'react';
import SearchBar from './containers/SearchBar';
import './App.css';
import PropertyListing from './containers/PropertyListings/PropertyListing';

const App = () => (
  <div data-test="app" className="container">
    <div className="row">
      <div className="col-md-12 p-5">
      <SearchBar />
    </div>
    <div className="p-1">
      <PropertyListing />
    </div>  
    </div> 
  </div>
);

export default App;
