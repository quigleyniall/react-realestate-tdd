import { combineReducers } from 'redux';
import listingsReducer from './reducers/listingsReducer';
import { ListingResponse } from '../interfaces';

export interface StoreState {
  listings?: ListingResponse[];
}

const rootReducer = combineReducers<StoreState>({
  listings: listingsReducer
});

export default rootReducer;
