import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '../types';
import Store from '../../';
import { ListingResponse } from '../../../interfaces';

export const api = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 10000
});

export interface SearchListingsAction {
  type: ActionTypes.search;
  payload: ListingResponse[] | [];
}

export const searchListings = (location: string) => {
  return async (dispatch: Dispatch) => {
    const state = Store.getState();
    const response = await api.get(`/${'rent'}/${'london'}`);

    dispatch<SearchListingsAction>({
      type: ActionTypes.search,
      payload: response.data.response.listings
    });
  };
};
