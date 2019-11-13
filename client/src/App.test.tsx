import React from 'react';
import { shallow } from 'enzyme';

import Home from './Pages/Home/Home';
import { findByTestAttr } from './test/testUtils';

test('renders without crashing', () => {
  const wrapper = shallow(<Home />);
  const app = findByTestAttr(wrapper, 'app');
  expect(app.length).toBe(1);
});
