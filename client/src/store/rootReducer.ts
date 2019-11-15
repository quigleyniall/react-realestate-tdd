import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import listingsReducer from './reducers/listingsReducer';
import initialiseFormReducer from './reducers/initialiseForm';
import { ListingResponse } from '../interfaces';

export interface StoreState {
  listings?: ListingResponse[];
  setInitialValues: any;
  form: formReducer;
}

const rootReducer = combineReducers<StoreState>({
  listings: listingsReducer,
  setInitialValues: initialiseFormReducer,
  form: formReducer
});

export default rootReducer;
