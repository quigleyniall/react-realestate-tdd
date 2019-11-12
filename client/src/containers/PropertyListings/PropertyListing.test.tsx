import React from 'react';
import { shallow } from 'enzyme';
import PropertyListing from './PropertyListing';
import { storeFactory, findByTestAttr } from '../../test/testUtils';
import { sampleResponse } from '../../test/sampleResponse';

const setup = (initialState = {}) => {
  return shallow(<PropertyListing store={storeFactory(initialState)}/>).dive().dive();
}

describe('listings', () => {
  describe('no listings in state', () => {
    test('no listings found text appears', () => {
      const wrapper = setup();
      const noResults = findByTestAttr(wrapper, 'no-results');
      expect(noResults.text()).toBe('No Results Found!')
    })
  })

  describe('listings in state', () => {
    test('listings appear', () => {
      const wrapper = setup({ listings: sampleResponse.response.listings });
      const results = findByTestAttr(wrapper, 'listing-results');
      expect(results.length).toBe(2);
    })
  })
})

describe('redux properties', () => {
  test('has access to listings props', () => {
    const wrapper = setup({ listings: sampleResponse.response.listings });
    const listingProp = wrapper.instance().props.listings;
    expect(listingProp).toBe(sampleResponse.response.listings);    
  })
})