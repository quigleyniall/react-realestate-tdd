import React from 'react';
import { shallow } from 'enzyme';
import { UnconnectedListingSearchBar, TestListingSearchBar } from './ListingSearchBar';
import { findByTestAttr ,storeFactory } from '../../test/testUtils';

const location = 'Manchester';
const type = 'buy';

const setup = (initialState = {}) => {
  const props = {
      match: { params: { type, location } },
  }
  return shallow(<TestListingSearchBar store={storeFactory(initialState)} {...props} />).dive();
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

    wrapper = shallow(<UnconnectedListingSearchBar {...props} />);
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
    const searchInput = findByTestAttr(wrapper, 'listing-search-input');    
    expect(searchInput.props().value).toBe(location)
  })
})

describe('redux props', () => {
  test("search listing action is a function prop", () => {    
    const wrapper: any = setup();
    const searchListingsProp = wrapper.instance().props.searchListings;
    expect(searchListingsProp).toBeInstanceOf(Function);
  })
});



