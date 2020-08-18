// @flow
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_HOST } from '../env';
import { LOADING } from './loading';

export const RECEIVE_ORGANIZER_BY_ID = 'RECEIVE_ORGANIZER_BY_ID';

export function receiveOrganizerById(json: mixed) {
  return { type: RECEIVE_ORGANIZER_BY_ID, payload: json };
}

export function fetchOrganizerById(id: number) {
  // $FlowFixMe
  return (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    return axios({
      url: `${API_HOST}api/v1/organizers/${id}`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.data.data)
      .then((json) => {
        dispatch(receiveOrganizerById(json));
        dispatch({ type: LOADING, payload: false });
      })
      .catch(() => {
        toast('Unexpected error occurred!', { type: 'error' });
        dispatch({ type: LOADING, payload: false });
      });
  };
}
