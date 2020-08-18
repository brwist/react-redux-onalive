// @flow
import { RECEIVE_ALL_EVENTS } from '../actions/events';

export default function events(
  state: mixed = [],
  action: { type: string, payload: mixed }
) {
  switch (action.type) {
    case RECEIVE_ALL_EVENTS:
      return action.payload;
    default:
      return state;
  }
}
