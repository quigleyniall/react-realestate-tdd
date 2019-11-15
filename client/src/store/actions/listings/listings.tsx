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
    const {
      type,
      location,
      priceMin,
      priceMax,
      bedMin,
      bedMax,
      bathMax,
      bathMin
    } = values;

    const url = `/${type}/${location}?priceMin=${
      priceMin ? priceMin : 0
    }&priceMax=${priceMax ? priceMax : 10000000}&bedMin=${
      bedMin ? bedMin : 1
    }&bedMax=${bedMax ? bedMax : 20}&bathMin=${bathMin ? bathMin : 1}&bathMax=${
      bathMax ? bathMax : 20
    }`;
    const response = await api.get(url);

    dispatch<SearchListingsAction>({
      type: ActionTypes.search,
      payload: response.data.response.listings
    });
    history.push(`/listings${url}`);
  };
};
