import { ActionTypes, Action } from '../actions';
import { ListingResponse } from '../../interfaces';

const listingsReducer = (state: ListingResponse[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.search:
      return action.payload;
    default:
      return state;
  }
};

export default listingsReducer;
