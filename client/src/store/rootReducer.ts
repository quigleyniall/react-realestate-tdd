import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import listingsReducer from './reducers/listingsReducer';
import selectedListing from './reducers/selectListing';
import { ListingResponse } from '../interfaces';

export interface StoreState {
  listings?: ListingResponse[];
  selectedListing: ListingResponse | {};
  form: formReducer;
}

const rootReducer = combineReducers<StoreState>({
  listings: listingsReducer,
  selectedListing,
  form: formReducer
});

export default rootReducer;
