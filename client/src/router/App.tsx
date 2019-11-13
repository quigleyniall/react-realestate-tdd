import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Home from '../Pages/Home';
import Listings from '../Pages/Listings';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/listings/:type/:location" component={Listings} />
    </Switch>
  </Router>
);

export default App;
