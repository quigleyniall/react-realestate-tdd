import { ActionTypes } from "../actions";

const listingsReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.search:
      return action.payload;
    default:
      return state;
  }
};

export default listingsReducer;
