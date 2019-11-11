import React from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => (
  <div data-test="app" className="row">
    <div className="col-md-12">
      <SearchBar />
    </div>
  </div>
);

export default App;
