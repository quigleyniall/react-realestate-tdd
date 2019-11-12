import { combineReducers } from 'redux';
import listingsReducer from './reducers/listingsReducer';

const rootReducer = combineReducers({
  listings: listingsReducer
});

export default rootReducer;
