import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';
import { findByTestAttr } from '../../test/testUtils';

test('renders with crashing', () => {
  const wrapper = shallow(<SearchBar />);
  const searchBar = findByTestAttr(wrapper, 'search-bar');
  expect(searchBar.length).toBe(1);
});
