import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import { findByTestAttr } from './test/testUtils';

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const app = findByTestAttr(wrapper, "app");
  expect(app.length).toBe(1);
});
