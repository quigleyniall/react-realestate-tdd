import axios from 'axios';
import { ActionTypes } from './types';

export const api = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 10000
});

export const searchListings = (location) => dispatch => {
  return api.get(`/${location}`)
    .then((res) => {
      dispatch({
        type: ActionTypes.search,
        payload: res.data.response.listings
      });
    })
};
