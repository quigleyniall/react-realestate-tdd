import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import { ListingResponse } from '../../interfaces';

export const api = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 10000
});

export interface SearchListingsAction {
  type: ActionTypes.search;
  payload: ListingResponse[] | [];
}

export const searchListings = (type: string, location: string) => {
  return async (dispatch: Dispatch) => {
    const response = await api.get(`/${type}/${location}`);

    dispatch<SearchListingsAction>({
      type: ActionTypes.search,
      payload: response.data.response.listings
    });
  };
};

// export const searchListings = (type: string, location: string) => (
//   dispatch: Dispatch
// ) => {
//   return api.get(`/${type}/${location}`).then(res => {
//     dispatch<SearchListingsAction>({
//       type: ActionTypes.search,
//       payload: res.data.response.listings
//     });
//   });
// };
