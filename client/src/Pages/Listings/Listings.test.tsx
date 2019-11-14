import React from 'react';
import { shallow } from 'enzyme';
import Listings, { UnconnectedListings } from './Listings';
import { findByTestAttr, storeFactory } from '../../test/testUtils';
import { sampleResponse } from '../../test/sampleResponse';

const location = 'Manchester';
const type = 'buy';

const setup = (initialState = {}) => {
  const props = {
      match: { params: { type, location } },
  }
  return shallow(<Listings store={storeFactory(initialState)} {...props} />).dive().dive()
};

describe('on mount', () => {
  let wrapper;
  let searchListingsMock;

  beforeEach(() => {
    searchListingsMock = jest.fn();
    const props = {
      searchListings: searchListingsMock,
      listings: [],
      match: { params: { type, location } },
    }

    wrapper = shallow(<UnconnectedListings {...props} />);
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
    const listingArg = searchListingsMock.mock.calls[0][1];
    expect(listingArg).toBe(location)
  });

  test('input box is preloaded with location', () => {
    wrapper.setState({ location });
    const searchInput = findByTestAttr(wrapper, 'listing-search-input').dive();     
    expect(searchInput.props().children[0].props.value).toBe(location)
  })
})

describe('redux props', () => {
  test('has access to listings props', () => {
    const wrapper: any = setup({ listings: [sampleResponse] });
    const listingProp = wrapper.instance().props.listings;
    expect(listingProp).toEqual([sampleResponse]);
  });

  test("search listing action is a function prop", () => {    
    const wrapper: any = setup();
    const searchListingsProp = wrapper.instance().props.searchListings;
    expect(searchListingsProp).toBeInstanceOf(Function);
  })
});

describe('renders without error', () => {
  test('renders listing search input', () => {
    const wrapper = setup();
    const searchInput = findByTestAttr(wrapper, 'listing-search-input');
    expect(searchInput.length).toBe(1);
  })

  test('renders properties', () => {
    const wrapper = setup();
    const propertyListing = findByTestAttr(wrapper, 'property-listings');
    expect(propertyListing.length).toBe(1);
  })
})

