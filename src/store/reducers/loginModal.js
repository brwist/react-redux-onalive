// @flow
import { TOGGLE_LOGIN_MODAL } from '../actions/auth';

export default function loginModal(
  state: string = '',
  action: { type: string, payload: string }
) {
  switch (action.type) {
    case TOGGLE_LOGIN_MODAL:
      return action.payload;
    default:
      return state;
  }
}
