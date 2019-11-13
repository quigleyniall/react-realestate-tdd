import React from 'react';
import Button from '../Button';
import history from '../../router/history';
import './Nav.scss';

const Nav = () => (
  <nav className="nav">
    <div className="m-2">
      <Button
        text="Home"
        onPress={() => history.push('/')}
        btnClass="light"
        test="nav-home"
      />
    </div>
    <div className="m-2">
      <Button
        text="Buy"
        onPress={() => history.push('/listings/buy/london')}
        btnClass="light"
        test="nav-buy"
      />
    </div>
    <div className="m-2">
      <Button
        text="Rent"
        onPress={() => history.push('/listings/rent/london')}
        btnClass="light"
        test="nav-rent"
      />
    </div>
  </nav>
);

export default Nav;
