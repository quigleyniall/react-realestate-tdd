import { ActionTypes } from '../actions';

const initialiseFormReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.initialiseForm:
      return {
        data: action.data
      };
    default:
      return state;
  }
};

export default initialiseFormReducer;
