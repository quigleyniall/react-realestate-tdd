import moxios from 'moxios';
import { searchListings, api } from './listings';
import { storeFactory } from '../../test/testUtils';
import { sampleResponse } from '../../test/sampleResponse';

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

    return store.dispatch(searchListings('buy', 'london')).then(() => {
      const newState = store.getState();
      expect(newState.listings).toEqual(sampleResponse.response.listings);
    });
  });
});
