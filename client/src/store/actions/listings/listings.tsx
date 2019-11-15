import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '../types';
import Store from '../../';
import { ListingResponse } from '../../../interfaces';
import history from '../../../router/history';

export const api = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 10000
});

export interface SearchListingsAction {
  type: ActionTypes.search;
  payload: ListingResponse[] | [];
}

export const searchListings = () => {
  return async (dispatch: Dispatch) => {
    const state = Store.getState();
    const { values } = state.form.searchbar;
    const { type, location } = values;
    const response = await api.get(`/${type}/${location}`);

    dispatch<SearchListingsAction>({
      type: ActionTypes.search,
      payload: response.data.response.listings
    });
    history.push(`/listings/${type}/${location}`);
  };
};
