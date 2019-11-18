import React from 'react';
import { shallow } from 'enzyme';
import MapWithMarkers from './Map';
import { storeFactory, findByTestAttr } from '../../test/testUtils';
import { sampleResponse } from '../../test/sampleResponse';

const setup = (initialState = { listings: sampleResponse.response.listings }) => shallow(<MapWithMarkers store={storeFactory(initialState)} />).dive().dive();

describe('redux properties', () => {
  test('has access to listings', () => {
    const wrapper = setup();
    const listingsProp = wrapper.instance().props.listings;
    expect(listingsProp).toEqual( sampleResponse.response.listings);
  });

  test('displays markers', () => {
    const wrapper = setup();
    const markers = findByTestAttr(wrapper, 'marker')
    expect(markers.length).toBe(2);
  })
})