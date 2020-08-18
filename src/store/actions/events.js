// @flow
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_HOST } from '../env';
import { LOADING } from './loading';

export const RECEIVE_EVENT_BY_ID = 'RECEIVE_EVENT_BY_ID';
export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';

export function receiveEventById(json: mixed) {
  return { type: RECEIVE_EVENT_BY_ID, payload: json };
}

export function fetchEventById(id: number) {
  // $FlowFixMe
  return (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    return axios({
      url: `${API_HOST}api/v1/events/${id}`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.data.data)
      .then((json) => {
        dispatch(receiveEventById(json));
        dispatch({ type: LOADING, payload: false });
      })
      .catch(() => {
        toast('Unexpected error occurred!', { type: 'error' });
        dispatch({ type: LOADING, payload: false });
      });
  };
}

export function receiveAllEvents(json: mixed) {
  return { type: RECEIVE_ALL_EVENTS, payload: json };
}

export function fetchAllEvents() {
  // $FlowFixMe
  return (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    return axios({
      url: `${API_HOST}api/v1/events`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.data.data)
      .then((json) => {
        dispatch(receiveAllEvents(json));
        dispatch({ type: LOADING, payload: false });
      })
      .catch(() => {
        toast('Unexpected error occurred!', { type: 'error' });
        dispatch({ type: LOADING, payload: false });
      });
  };
}
