import Listing from './Listing';
import { sampleResponse } from '../../test/sampleResponse';
import { checkProps } from '../../test/testUtils';

describe('listing', () => {
  test('check props passed', () => {
    const expectedProps = { listing: sampleResponse.response.listings[0] }; 
    checkProps(Listing, expectedProps);
  })
})