import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';
import { findByTestAttr } from '../../test/testUtils';

test('renders without crashing', () => {
  const wrapper = shallow(<Home />);
  const app = findByTestAttr(wrapper, 'app');
  expect(app.length).toBe(1);
});

test('renders the nav', () => {
  const wrapper = shallow(<Home />);
  const nav = findByTestAttr(wrapper, 'nav');
  expect(nav.length).toBe(1);
});

test('renders the search bar', () => {
  const wrapper = shallow(<Home />);
  const searchBar = findByTestAttr(wrapper, 'search-bar')
  expect(searchBar.length).toBe(1);
})

test('renders 3 cards', () => {
  const wrapper = shallow(<Home />);
  const cardContainer = findByTestAttr(wrapper, 'card-container');
  expect(cardContainer.children().length).toBe(3);
});

test('renders the footer', () => {
  const wrapper = shallow(<Home />);
  const footer = findByTestAttr(wrapper, 'footer');
  expect(footer.length).toBe(1);
})

