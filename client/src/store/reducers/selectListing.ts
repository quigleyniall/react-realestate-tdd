import { ListingResponse } from '../../interfaces';
import { Action, ActionTypes } from '../actions';

const selectedListing = (state: ListingResponse | {} = {}, action: Action) => {
  switch (action.type) {
    case ActionTypes.select:
      return action.payload;
    default:
      return state;
  }
};

export default selectedListing;
