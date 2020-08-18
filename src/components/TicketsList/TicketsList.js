// @flow
import React from 'react';
import { arrayOf, shape, func, string, number } from 'prop-types';
import TicketLayout from '../../layouts/TicketLayout/TicketLayout.js';
import NumberInput from '../NumberInput/NumberInput.js';
import type { TicketWithAmount } from '../TicketsPicker/UseTicketsPicker.js';

import './TicketsList.scss';

type Props = {
  tickets: Array<TicketWithAmount>,
  onAmountChange: func,
  t: func,
};

const TicketsList = ({ tickets, onAmountChange, t }: Props) => (
  <div className="tickets-list">
    <div className="tickets-list__header">
      <div className="tickets-list__ticket-type">{t('TICKET_TYPE')}</div>
      <div className="tickets-list__description">{t('DESCRIPTION')}</div>
      <div className="tickets-list__quantity">{t('QUANTITY')}</div>
      <div className="tickets-list__price">{t('PRICE')}</div>
    </div>
    {tickets.map((ticket) => (
      <TicketLayout
        key={ticket.id}
        title={ticket.title}
        description={ticket.description}
        price={ticket.price}
        currency={ticket.currency}
        numberInput={
          <NumberInput
            amountSelected={ticket.amountSelected}
            // eslint-disable-next-line react/jsx-no-bind
            onAmountChange={(value) => {
              onAmountChange(ticket, value);
            }}
          />
        }
      />
    ))}
  </div>
);

TicketsList.propTypes = {
  tickets: arrayOf(
    shape({
      id: string.isRequired,
      title: string.isRequired,
      description: string,
      price: number.isRequired,
      currency: string.isRequired,
    })
  ).isRequired,
  onAmountChange: func.isRequired,
  t: func.isRequired,
};

export default TicketsList;
