import React from 'react';
import { shallow } from 'enzyme';
import PropertyListing from './PropertyListing';
import { storeFactory, findByTestAttr } from '../../test/testUtils';
import { sampleResponse } from '../../test/sampleResponse';
import Listing from '../../components/Listing';

const setup = (initialState = { listings: []}) => {
  return shallow(<PropertyListing store={storeFactory(initialState)} />)
    .dive()
    .dive();
};

describe('listings', () => {
  describe('no listings in state', () => {
    test('renders without error', () => {
      const wrapper = setup({ listings: sampleResponse.response.listings });
      const results = findByTestAttr(wrapper, 'listing-results');
      expect(results.length).toBe(1);
    });

    test('no listings found text appears', () => {
      const wrapper = setup();
      const noResults = findByTestAttr(wrapper, 'no-results');
      expect(noResults.text().length).not.toBe(0);
    });
  });

  describe('listings in state', () => {
    let wrapper;
    let listings;

    beforeEach(() => {
      listings = sampleResponse.response.listings;
      wrapper = setup({ listings });
    });
    test('renders without error', () => {
      const results = findByTestAttr(wrapper, 'listing-results');
      expect(results.length).toBe(1);
    });

    test('correct amount of listings appear', () => {
      expect(wrapper.find(Listing).length).toBe(listings.length);
    });

    test('"no listings found!" text does not appear', () => {
      const noResults = findByTestAttr(wrapper, 'no-results');
      expect(noResults.length).toBe(0);
    });
  });
});

describe('redux properties', () => {
  test('has access to listings props', () => {
    const wrapper: any = setup({ listings: sampleResponse.response.listings });
    const listingProp = wrapper.instance().props.listings;
    expect(listingProp).toBe(sampleResponse.response.listings);
  });
});
