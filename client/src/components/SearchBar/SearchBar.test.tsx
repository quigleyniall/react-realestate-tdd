import React from 'react';
import moxios from 'moxios';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';
import { findByTestAttr } from '../../test/testUtils';
import sampleResponse from '../../test/sampleResponse.json';

test('renders with crashing', () => {
  const wrapper = shallow(<SearchBar />);
  const searchBar = findByTestAttr(wrapper, 'search-bar');
  expect(searchBar.length).toBe(1);
});

// describe('searches api', () => {
//   beforeEach(() => {
//     moxios.install();
//   });
//   afterEach(() => {
//     moxios.uninstall();
//   });
//   test('get response from server', () => {
//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request.respondWith({
//         status: 200,
//         response: sampleResponse
//       })
//     });
//   })
// })
