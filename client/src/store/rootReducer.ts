import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import listingsReducer from './reducers/listingsReducer';
import { ListingResponse } from '../interfaces';

export interface StoreState {
  listings?: ListingResponse[];
  form: formReducer;
}

const rootReducer = combineReducers<StoreState>({
  listings: listingsReducer,
  form: formReducer
});

export default rootReducer;
