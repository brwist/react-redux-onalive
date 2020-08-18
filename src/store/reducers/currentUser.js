// @flow
import { RECEIVE_CURRENT_USER } from '../actions/auth';

export default function currentUser(
  state: mixed = {},
  action: { type: string, payload: { token: string, user: mixed } }
) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
}
