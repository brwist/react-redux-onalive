// @flow
import { RECEIVE_EVENT_BY_ID } from '../actions/events';

export default function eventById(
  state: mixed = {},
  action: { type: string, payload: mixed }
) {
  switch (action.type) {
    case RECEIVE_EVENT_BY_ID:
      return action.payload;
    default:
      return state;
  }
}
