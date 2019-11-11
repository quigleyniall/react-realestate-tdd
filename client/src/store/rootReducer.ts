import listingsReducer from './reducers/listingsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  listings: listingsReducer
});

export default rootReducer;
