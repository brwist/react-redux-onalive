// @flow
import { useState } from 'react';
import { func } from 'prop-types';

export type Ticket = {
  id: string,
  title: string,
  event: string,
  event_id: string,
  event_title: string,
  total_amount: number,
  amountSelected: string | number,
  price: number,
  currency: string,
  type: string,
};

const useTicketsPicker = (tickets: Array<Ticket>, updateCart: func) => {
  const [ticketsArray, setTicketsArray] = useState(tickets);
  const onTicketAmountChange = (id: string, amount: string | number) => {
    const newState = ticketsArray.map((ticket) => {
      return {
        ...ticket,
        amountSelected: ticket.id === id ? amount : ticket.amountSelected,
      };
    });
    setTicketsArray(newState);
    updateCart(newState);
  };

  const onTicketDelete = (id: string) => {
    // $FlowFixMe
    const newState = ticketsArray.filter((ticket) => ticket.id !== id);
    setTicketsArray(newState);
    updateCart(newState);
  };

  const totalAmount = ticketsArray
    .map((ticket) => ticket.amountSelected || 0)
    .reduce((acc, cur) => Number(acc) + Number(cur), 0);

  const totalPrice = ticketsArray
    .map((ticket) => (Number(ticket.amountSelected) || 0) * ticket.price)
    .reduce((acc, cur) => acc + cur, 0);

  return {
    onTicketAmountChange,
    onTicketDelete,
    ticketsArray,
    totalAmount,
    totalPrice,
  };
};

export default useTicketsPicker;
