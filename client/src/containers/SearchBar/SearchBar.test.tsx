import React from 'react';
import { shallow } from 'enzyme';
import SearchBar, { UnconnectedSearchBar } from './SearchBar';
import { findByTestAttr, storeFactory } from '../../test/testUtils';


const setup = (initialState = {}) => {
  return shallow(<SearchBar store={storeFactory(initialState)} />).dive();
}

describe('redux props', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'search-form');
    expect(component.length).toBe(1);
  })
  
  test('search listing action creator is a function prop', () => {
    const wrapper = setup({});
    const searchListingProp = wrapper.instance().props.searchListings;
    expect(searchListingProp).toBeInstanceOf(Function);
  })
})


describe('search listing action creator called', () => {
  let searchListingMock;
  let wrapper;
  const location = 'London';
  const listingType = 'rent';

  beforeEach(() => {
    searchListingMock = jest.fn();

    const props = {
      searchListings: searchListingMock
    }

    wrapper = shallow(<UnconnectedSearchBar {...props} />);
    wrapper.setState({ location, listingType });
    const submitButton = findByTestAttr(wrapper, 'search-button');
    submitButton.simulate('click');
  });

  test('searchListing function is call when button is submitted', () => {
    expect(searchListingMock.mock.calls.length).toBe(1);
  });

  test('correct listingType is passed to function', () => {
    const listingTypeArg = searchListingMock.mock.calls[0][0];
    expect(listingTypeArg).toBe(listingType);
  })

  test('correct location is passed to function', () => {
    const searchListingArg = searchListingMock.mock.calls[0][1];
    expect(searchListingArg).toBe(location);
  });

  test('input box is clear when button is pressed', () => {
    expect(wrapper.state('location')).toBe('');
  })
});

describe('test button group', () => {
  describe('rent button clicked', () => {
    test('rent button has active class', () => {
      const wrapper = setup();
      wrapper.setState({ listingType: 'rent' });
      const rentButton = findByTestAttr(wrapper, 'rent-button');
      expect(rentButton.hasClass('active')).toBeTruthy();
    })

    test('buy button has no active class', () => {
      const wrapper = setup();
      wrapper.setState({ listingType: 'rent' });
      const buyButton = findByTestAttr(wrapper, 'buy-button');
      expect(buyButton.hasClass('active')).not.toBeTruthy();
    })
  })
  describe('buy button clicked', () => {
    test('buy button has active class', () => {
      const wrapper = setup();
      wrapper.setState({ listingType: 'buy' });
      const buyButton = findByTestAttr(wrapper, 'buy-button');
      expect(buyButton.hasClass('active')).toBeTruthy();
    })

    test('rent button has no active class', () => {
      const wrapper = setup();
      wrapper.setState({ listingType: 'buy' });
      const rentButton = findByTestAttr(wrapper, 'rent-button');
      expect(rentButton.hasClass('active')).not.toBeTruthy();
    })
  })
})

