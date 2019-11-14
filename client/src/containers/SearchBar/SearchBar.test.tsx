import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';
import { findByTestAttr } from '../../test/testUtils';


const setup = () => {
  return shallow(<SearchBar />);
}

describe('test button group', () => {  
  describe('original state is buy', () => {
    let wrapper;
    let rentButton;
    let buyButton;

    beforeEach(() => {
      wrapper = setup();
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
        wrapper = setup();
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

