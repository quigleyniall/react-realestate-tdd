import React from 'react';
import { shallow } from 'enzyme';
import Listings from './Listings';
import { findByTestAttr } from '../../test/testUtils';

const setup = () => shallow(<Listings />);

describe('renders without error', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const listings = findByTestAttr(wrapper, 'listings');
    expect(listings.length).toBe(1);
  })

  test('renders listing search input', () => {
    const wrapper = setup();
    const searchInput = findByTestAttr(wrapper, 'listing-search-input');
    expect(searchInput.length).toBe(1);
  })

  test('renders properties', () => {
    const wrapper = setup();
    const propertyListing = findByTestAttr(wrapper, 'property-listings');
    expect(propertyListing.length).toBe(1);
  });

  test('renders map', () => {
    const wrapper = setup();
    const map = findByTestAttr(wrapper, 'map');
    expect(map.length).toBe(1);
  })
})