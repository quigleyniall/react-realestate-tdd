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
  });
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
  describe('original state is buy', () => {
    let wrapper;
    let rentButton;
    let buyButton;

    beforeEach(() => {
      wrapper = shallow(<UnconnectedSearchBar searchListings={jest.fn() } />);
      wrapper.setState({ listingType: 'buy' });
      rentButton = findByTestAttr(wrapper, 'rent-button').dive();
      buyButton = findByTestAttr(wrapper, 'buy-button').dive();
    })
    
    test('rent button changes listingType to rent', () => {
      rentButton.simulate('click');
      const listingType = wrapper.state('listingType')
      expect(listingType).toBe('rent')
    })

    test('rent button doesnt have active class when listingType=buy', () => {
      expect(rentButton.hasClass('active')).not.toBeTruthy();
    })

    test('buy button has active class when listingType=Buy', () => {
      expect(buyButton.hasClass('active')).toBeTruthy();
    })

    describe('original state is rent', () => {
      beforeEach(() => {
        wrapper = shallow(<UnconnectedSearchBar searchListings={jest.fn() } />);
        wrapper.setState({ listingType: 'rent' });
        rentButton = findByTestAttr(wrapper, 'rent-button').dive();
        buyButton = findByTestAttr(wrapper, 'buy-button').dive();
      })

      test('buy button changes listingType to buy', () => {     
        buyButton.simulate('click');
        const listingType = wrapper.state('listingType')
        expect(listingType).toBe('buy')
      });

      test('rent button has active class when listingType=Rent', () => {
        expect(rentButton.hasClass('active')).toBeTruthy();
      })

      test('buy button doesnt have active class when listingType=Rent', () => {
        expect(buyButton.hasClass('active')).not.toBeTruthy();
      });
    })
  })
})

