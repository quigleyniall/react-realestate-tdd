import ListingSearchBar from './ListingSearchBar';
import { checkProps } from '../../test/testUtils';

test('check props', () => {
  const expectedProps = { onChange: jest.fn(), location: 'London'}
  checkProps(ListingSearchBar, expectedProps);
})

