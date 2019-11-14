import ListingSearchBar from './ListingSearchBar';
import { checkProps } from '../../test/testUtils';

test('check props', () => {
  const expectedProps = { handleChange: jest.fn(), location: 'London', onPress: jest.fn()}
  checkProps(ListingSearchBar, expectedProps);
})

