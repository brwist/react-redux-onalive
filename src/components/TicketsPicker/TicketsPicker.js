// @flow
import React from 'react';
import { func } from 'prop-types';
import { FaShoppingCart } from 'react-icons/fa';
import type { Ticket } from './UseTicketsPicker.js';
import useTicketsPicker from './UseTicketsPicker.js';
import Tabs from '../Tabs/Tabs.js';
import TicketsList from '../TicketsList/TicketsList.js';
import Button from '../Button/Button.js';

import './TicketsPicker.scss';

type Props = {
  tickets: Array<Ticket>,
  courses: Array<Ticket>,
  proceedToCart: (selectedTickets: {}) => void,
  t: func,
};

const TicketsPicker = ({ tickets, courses, proceedToCart, t }: Props) => {
  const {
    onTicketAmountChange,
    onProceedToCart,
    ticketsWithAmount,
    coursesWithAmount,
    totalAmount,
    totalPrice,
  } = useTicketsPicker(tickets, courses, proceedToCart);

  const tabs = [
    {
      title: t('TICKETS'),
      count: tickets.length,
      content: (
        <TicketsList
          tickets={ticketsWithAmount}
          onAmountChange={onTicketAmountChange}
          t={t}
        />
      ),
    },
    {
      title: t('COURSES'),
      count: courses.length,
      content: (
        <TicketsList
          tickets={coursesWithAmount}
          onAmountChange={onTicketAmountChange}
          t={t}
        />
      ),
    },
  ];

  return (
    <React.Fragment>
      <Tabs tabs={tabs} />
      <div className="tickets-picker__summary">
        <div className="tickets-picker__cart">
          <FaShoppingCart
            size={20}
            color="#666"
            className="tickets-picker__cartico"
          />
          {t('CART')}
        </div>
        <div className="tickets-picker__total">{t('TOTAL')}</div>
        <div className="tickets-picker__goods">{`${totalAmount} ${t(
          'TICKETS'
        )}`}</div>
        <div className="tickets-picker__price">{`${
          (tickets[0] || courses[0]).currency
        } ${totalPrice}`}</div>
      </div>
      <button
        type="button"
        className="tickets-picker__button"
        disabled={totalAmount === 0}
        onClick={onProceedToCart}
      >
        <Button text={t('PROCEED_TO_CART')} type="main" />
      </button>
    </React.Fragment>
  );
};

export default TicketsPicker;
