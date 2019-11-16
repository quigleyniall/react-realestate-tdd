import axios from 'axios';
import { Dispatch } from 'redux';
// import { ActionTypes } from '../types';
import store from '../..';
import { ListingResponse } from '../../../interfaces';
import history from '../../../router/history';
import { SEARCH } from '../types';

export const api = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 10000
});

export interface SearchListingsAction {
  type: string;
  payload: ListingResponse[] | [];
}

export const searchListings = values => {
  return async (dispatch: Dispatch) => {
    const { type, location, priceMin, priceMax, bedrooms, bathrooms } = values;
    let bathMin;
    let bathMax;
    let bedMin;
    let bedMax;

    if (bathrooms) {
      if (bathrooms.length > 1) {
        bathMin = bathrooms.charAt(0);
        bathMax = 20;
      } else {
        bathMin = bathrooms.charAt(0);
        bathMax = bathrooms.charAt(0);
      }
    } else {
      bathMin = values.bathmin;
      bathMax = values.bathmin;
    }

    if (bedrooms) {
      if (bedrooms.length > 1) {
        bedMin = bedrooms.charAt(0);
        bedMax = 20;
      } else {
        bedMin = bedrooms.charAt(0);
        bedMax = bedrooms.charAt(0);
      }
    } else {
      bedMin = values.bedMin;
      bedMax = values.bedMax;
    }

    const url = `/${type}/${location}?priceMin=${
      priceMin ? priceMin : 0
    }&priceMax=${priceMax ? priceMax : 10000000}&bedMin=${
      bedMin ? bedMin : 1
    }&bedMax=${bedMax ? bedMax : 20}&bathMin=${bathMin ? bathMin : 1}&bathMax=${
      bathMax ? bathMax : 20
    }`;

    const response = await api.get(url);

    dispatch<SearchListingsAction>({
      type: SEARCH,
      payload: response.data.response.listings
    });
    history.push(`/listings${url}`);
  };
};
