import axios from 'axios';
import { ActionTypes } from './types';

const url = 'http://localhost:8080';

export const searchListings = () => async dispatch => {
  const res = await axios.get(url);
  const { data } = await res;
  dispatch({
    type: ActionTypes.search,
    payload: data
  });
};
