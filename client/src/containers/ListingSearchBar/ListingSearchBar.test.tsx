import React from 'react';
import { shallow } from 'enzyme';
import { TestListingSearchBar, UnconnectedListingSearchBar } from './ListingSearchBar';
import { findByTestAttr ,storeFactory } from '../../test/testUtils';

const location = 'Manchester';
const type = 'buy';

const setup = (initialState = {}) => {
  return shallow(<TestListingSearchBar store={storeFactory(initialState)} />).dive().dive();
};

describe('on mount', () => {
  let wrapper;
  let searchListingsMock;
  let handleSubmitMock;
  let changeMock;
  let search = '?priceMin=0&priceMax=1000000000&bedMin=1&bedMax=20&bathMin=1&bathMax=20';

  beforeEach(() => {
    searchListingsMock = jest.fn();
    handleSubmitMock = jest.fn();
    changeMock = jest.fn();
    const props = {
      searchListings: searchListingsMock,
      location: { search },
      match: { params: { type, location } },
      handleSubmit: handleSubmitMock,
      change: changeMock
    }

    wrapper = shallow(<UnconnectedListingSearchBar {...props} />); 
    wrapper.instance().componentDidMount();   
  });

  test('change function to be called', () => {
    expect(changeMock.mock.calls.length).toBe(8);
  })

  test('search listing action is called', () => {
    expect(searchListingsMock.mock.calls.length).toBe(1);
  });

  test('correct listing type arg is passed to func', () => {
    const listingArg = searchListingsMock.mock.calls[0][0];
    const expected =  { 
      location: 'Manchester',
      type: 'buy',
      priceMin: '0',
      priceMax: '1000000000',
      bedMin: '1',
      bedMax: '20',
      bathMax: '20',
      bathMin: '1'
   }
    expect(listingArg).toEqual(expected)
  });

  describe('click the search button', () => {
    test('submits the form ', () => {      
      const submit = findByTestAttr(wrapper, 'listing-search');
      submit.simulate('click');
      expect(handleSubmitMock.mock.calls.length).toBe(1);      
    })
  })
})

describe('redux props', () => {
  test("search listing action is a function prop", () => {    
    const wrapper: any = setup();
    const searchListingsProp = wrapper.instance().props.searchListings;
    expect(searchListingsProp).toBeInstanceOf(Function);
  })

  test('change action is a function prop', () => {
    const wrapper: any = setup();
    const changeProp = wrapper.instance().props.change;
    expect(changeProp).toBeInstanceOf(Function);
  })
});



