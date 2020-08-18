// @flow
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_HOST } from '../env';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const TOGGLE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL';

export function receiveUserData(json: { data: mixed }) {
  return { type: RECEIVE_CURRENT_USER, payload: json.data };
}

export function toggleLoginModal(name: string) {
  return { type: TOGGLE_LOGIN_MODAL, payload: name };
}

export function register(data: { email: string, name: string, phone: string }) {
  // $FlowFixMe
  return (dispatch) => {
    return axios({
      url: `${API_HOST}api/v1/auth/register`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    })
      .then(() => dispatch(toggleLoginModal('confirm')))
      .catch(() => {
        toast('Noe gikk galt. Prøv igjen eller kontakt oss.', {
          type: 'error',
        });
      });
  };
}

export function getLink(data: { email: string }) {
  const { location } = window;
  // $FlowFixMe
  return (dispatch) => {
    return axios({
      url: `${API_HOST}api/v1/auth/get-link`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: { email: data.email, login_url: `${location.origin}/login?token=` },
    })
      .then(() => dispatch(toggleLoginModal('confirm')))
      .catch(() => {
        toast('Email ble ikke funnet. Registrer deg eller prøv igjen.', {
          type: 'error',
        });
      });
  };
}

export function login(token: string) {
  // $FlowFixMe
  return (dispatch) => {
    return axios({
      url: `${API_HOST}api/v1/auth/magic-link-login/${token}`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.data)
      .then((json) => {
        dispatch(receiveUserData(json));
      })
      .catch(() => {
        toast('There is something wrong. Try again.', { type: 'error' });
      });
  };
}
