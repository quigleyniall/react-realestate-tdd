import React from 'react';
import { shallow } from 'enzyme';
import Listings from './Listings';
import { findByTestAttr, storeFactory } from '../../test/testUtils';
import { sampleResponse } from '../../test/sampleResponse';

const location = 'Manchester';
const type = 'buy';

const setup = (initialState = {}) => {
  const props = {
      match: { params: { type, location } },
  }
  return shallow(<Listings store={storeFactory(initialState)} {...props} />)
};

describe('on mount', () => {
  let wrapper;
  let searchListingsMock;

  beforeEach(() => {
    searchListingsMock = jest.fn();
    const initialState = {
      searchListings: searchListingsMock,
      listings: []
    }
    wrapper = setup(initialState);
    wrapper.instance().componentDidMount();
  });

  test('search listing action is called', () => {
    expect(searchListingsMock.mock.calls.length).toBe(1);
  });

  test('correct listing type arg is passed to func', () => {
    const listingArg = searchListingsMock.mock.calls[0][0];
    expect(listingArg).toBe(type)
  });

  test('correct location arg is passed to func', () => {
    const listingArg = searchListingsMock.mock.calls[0][0];
    expect(listingArg).toBe(location)
  });

  test('set location in state', () => {
    wrapper.state('location').toBe(location);
  });

  test('set listing type in state', () => {
    expect(wrapper.state('listingType')).toBe(type)
  })
})

describe('redux props', () => {
  test('has access to listings props', () => {
    const wrapper = setup({ listing: [sampleResponse] });
    const listingProp = wrapper.instance().props.listings;
    expect(listingProp).toBe([sampleResponse]);
  });

  test("search listing action is a function prop", () => {    
    const wrapper = setup();
    const searchListingsProp = wrapper.instance().props.searchListings;
    expect(searchListingsProp).toBeInstanceOf(Function);
  })
})

describe('search bar', () => {
  test('input box is preloaded with location', () => {
    const wrapper = setup();
    const searchInput = findByTestAttr(wrapper, 'listing-search-input').dive();
    expect(searchInput.props().value).toBe(location)
  })
})

