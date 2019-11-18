import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import listingsReducer from './reducers/listingsReducer';
import selectListing from './reducers/selectListing';
import { ListingResponse } from '../interfaces';

export interface StoreState {
  listings?: ListingResponse[];
  selectListing: ListingResponse | {};
  form: formReducer;
}

const rootReducer = combineReducers<StoreState>({
  listings: listingsReducer,
  selectListing,
  form: formReducer
});

export default rootReducer;
