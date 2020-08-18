// @flow
import { LOADING } from '../actions/loading';

export default function loading(
  state: boolean = false,
  action: { type: string, payload: mixed }
) {
  switch (action.type) {
    case LOADING:
      return action.payload;
    default:
      return state;
  }
}
