// @flow
import { useState, useEffect, useRef } from 'react';
import { func } from 'prop-types';

export type Ticket = {
  id: string,
  title: string,
  description?: string,
  total_amount: number,
  price: number,
  currency: string,
  type: string,
};

export type TicketWithAmount = Ticket & {
  amountSelected: number,
};

const useTicketsPicker = (
  tickets: Array<Ticket>,
  courses: Array<Ticket>,
  proceedToCart: func
) => {
  const [selectedTickets, setSelectedTickets] = useState({});
  const selectedTicketsRef = useRef(selectedTickets);
  useEffect(() => {
    selectedTicketsRef.current = selectedTickets;
  }, [selectedTickets]);

  const onTicketAmountChange = (
    ticket: { id: string },
    amount: string | number
  ) => {
    setSelectedTickets((prevState) => ({ ...prevState, [ticket.id]: amount }));
  };

  const onProceedToCart = () => {
    const ticketsList = { ...selectedTicketsRef.current };
    Object.keys(ticketsList).map((key) =>
      ticketsList[key] === 0 ? delete ticketsList[key] : null
    );

    const ticketsForCart = [];
    tickets.map((ticket) => {
      if (Object.keys(ticketsList).indexOf(ticket.id) !== -1) {
        ticketsForCart.push({
          ...ticket,
          amountSelected:
            selectedTickets[ticket.id] !== undefined
              ? selectedTickets[ticket.id]
              : 0,
        });
      }
      return null;
    });
    courses.map((course) => {
      if (Object.keys(ticketsList).indexOf(course.id) !== -1) {
        ticketsForCart.push({
          ...course,
          amountSelected:
            selectedTickets[course.id] !== undefined
              ? selectedTickets[course.id]
              : 0,
        });
      }
      return null;
    });

    proceedToCart(ticketsForCart);
  };

  const ticketsWithAmount: Array<TicketWithAmount> = tickets.map((ticket) => ({
    ...ticket,
    amountSelected:
      selectedTickets[ticket.id] !== undefined ? selectedTickets[ticket.id] : 0,
  }));

  const coursesWithAmount: Array<TicketWithAmount> = courses.map((course) => ({
    ...course,
    amountSelected:
      selectedTickets[course.id] !== undefined ? selectedTickets[course.id] : 0,
  }));

  const totalAmount = Object.keys(selectedTickets)
    .map((key) => selectedTickets[key] || 0)
    .reduce((acc, cur) => Number(acc) + Number(cur), 0);

  const totalPrice = Object.keys(selectedTickets)
    .map((key) => {
      const item =
        tickets.find((ticket) => ticket.id === key) ||
        courses.find((course) => course.id === key);
      return (
        (selectedTickets[key] || 0) *
        // $FlowFixMe
        item.price
      );
    })
    .reduce((acc, cur) => acc + cur, 0);

  return {
    onTicketAmountChange,
    onProceedToCart,
    ticketsWithAmount,
    coursesWithAmount,
    totalAmount,
    totalPrice,
  };
};

export default useTicketsPicker;
