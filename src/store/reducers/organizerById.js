// @flow
import { RECEIVE_ORGANIZER_BY_ID } from '../actions/organizers';

export default function organizerById(
  state: mixed = {},
  action: { type: string, payload: mixed }
) {
  switch (action.type) {
    case RECEIVE_ORGANIZER_BY_ID:
      return action.payload;
    default:
      return state;
  }
}
