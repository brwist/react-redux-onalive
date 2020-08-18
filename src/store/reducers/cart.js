// @flow
import { PROCEED_TO_CART, PROCESS_ORDER } from '../actions/cart';

export default function cart(
  state: mixed = {
    cart: [],
    orderProcessed: false,
  },
  action: { type: string, payload: mixed }
) {
  switch (action.type) {
    case PROCEED_TO_CART:
      return action.payload;
    case PROCESS_ORDER:
      return {
        ...state,
        orderProcessed: true,
      };
    default:
      return state;
  }
}
