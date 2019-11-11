import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import { findByTestAttr } from './test/testUtils';

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const app = findByTestAttr(wrapper, "app");
  expect(app.length).toBe(1);
});

test('text hello world appears', () => {
  const wrapper = shallow(<App />);
  const textElement = findByTestAttr(wrapper, 'hello');
  expect(textElement.text()).toEqual('Hello world');
})
