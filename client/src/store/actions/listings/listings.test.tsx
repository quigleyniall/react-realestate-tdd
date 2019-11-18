import moxios from 'moxios';
import { searchListings, api, selectListing } from './listings';
import { storeFactory } from '../../../test/testUtils';
import { sampleResponse } from '../../../test/sampleResponse';

describe('searches api', () => {
  beforeEach(() => {
    moxios.install(api);
  });
  afterEach(() => {
    moxios.uninstall(api);
  });
  test('get response from server', () => {
    const store = storeFactory({});

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: sampleResponse
      });
    });

    const values = {};
    return store.dispatch(searchListings(values)).then(() => {
      const newState = store.getState();
      expect(newState.listings).toEqual(sampleResponse.response.listings);
    });
  });
});


test('selects a listing from results', () => {
    const store = storeFactory({ listings: sampleResponse.response.listings });
    store.dispatch(selectListing(sampleResponse.response.listings[0]));
    const selectedListing = store.getState().selectListing;
    expect(selectedListing).toEqual(sampleResponse.response.listings[0]);
})

