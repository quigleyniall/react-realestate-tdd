import { SEARCH, Action } from '../actions';
import { ListingResponse } from '../../interfaces';

const listingsReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload;
    default:
      return state;
  }
};

export default listingsReducer;
