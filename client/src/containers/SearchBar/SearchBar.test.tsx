import React from 'react';
import { shallow, mount } from 'enzyme';
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
    const submitButton = findByTestAttr(wrapper, 'search-button').dive();
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
    test('rent button changes listingType to rent', () => {
      const wrapper = shallow(<UnconnectedSearchBar searchListings={jest.fn() } />);
      wrapper.setState({ listingType: 'buy' });
      const rentButton = findByTestAttr(wrapper, 'rent-button').dive();
      rentButton.simulate('click');
      const listingType = wrapper.state('listingType')
      expect(listingType).toBe('rent')
    })

    test('buy button changes listingType to buy', () => {
      const wrapper = shallow(<UnconnectedSearchBar searchListings={jest.fn() } />);
      wrapper.setState({ listingType: 'rent' });
      const buyButton = findByTestAttr(wrapper, 'buy-button').dive();
      buyButton.simulate('click');
      const listingType = wrapper.state('listingType')
      expect(listingType).toBe('buy')
    });

    test('rent button has active class when listingType=Rent', () => {
      const wrapper = shallow(<UnconnectedSearchBar searchListings={jest.fn() } />);
      wrapper.setState({ listingType: 'rent' });
      const rentButton = findByTestAttr(wrapper, 'rent-button').dive();
      expect(rentButton.hasClass('active')).toBeTruthy();
    })

    test('rent button doesnt have active class when listingType=buy', () => {
      const wrapper = shallow(<UnconnectedSearchBar searchListings={jest.fn() } />);
      wrapper.setState({ listingType: 'buy' });
      const rentButton = findByTestAttr(wrapper, 'rent-button').dive();
      expect(rentButton.hasClass('active')).not.toBeTruthy();
    })

    test('buy button has active class when listingType=Buy', () => {
      const wrapper = shallow(<UnconnectedSearchBar searchListings={jest.fn() } />);
      wrapper.setState({ listingType: 'buy' });
      const buyButton = findByTestAttr(wrapper, 'buy-button').dive();
      expect(buyButton.hasClass('active')).toBeTruthy();
    })
    test('buy button doesnt have active class when listingType=Rent', () => {
      const wrapper = shallow(<UnconnectedSearchBar searchListings={jest.fn() } />);
      wrapper.setState({ listingType: 'rent' });
      const buyButton = findByTestAttr(wrapper, 'buy-button').dive();
      expect(buyButton.hasClass('active')).not.toBeTruthy();
    })
})

