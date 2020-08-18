// @flow
export const PROCEED_TO_CART = 'PROCEED_TO_CART';

export const PROCESS_ORDER = 'PROCESS_ORDER';

export function proceedToCart(pickedTickets: {}) {
  return {
    type: PROCEED_TO_CART,
    payload: { cart: pickedTickets, orderProcessed: false },
  };
}

export function processOrder() {
  return { type: PROCESS_ORDER };
}
