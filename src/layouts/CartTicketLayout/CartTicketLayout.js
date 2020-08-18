// @flow
import React from 'react';
import type { Node } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { string, node, number, func } from 'prop-types';

import './CartTicketLayout.scss';

type Props = {
  title: string,
  eventId: string,
  event: string,
  price: number,
  currency: string,
  numberInput: Node,
  onTicketDelete?: func,
};

const CartTicketLayout = ({
  title,
  event,
  eventId,
  price,
  currency,
  numberInput,
  onTicketDelete,
}: Props) => (
  <div className="cart-ticket">
    <div className="cart-ticket__cart">
      {onTicketDelete ? (
        <button type="button" onClick={onTicketDelete}>
          <MdClose size={20} color="#fff" className="cart-ticket__deleteico" />
        </button>
      ) : null}
    </div>
    <div className="cart-ticket__title">{title}</div>
    <div className="cart-ticket__event">
      <Link to={`/events/${eventId}`} className="cart-ticket__event-link">
        {event}
      </Link>
    </div>
    {numberInput}
    <div className="cart-ticket__price">{`${currency} ${price}`}</div>
  </div>
);

CartTicketLayout.propTypes = {
  title: string.isRequired,
  eventId: string.isRequired,
  price: number.isRequired,
  currency: string.isRequired,
  numberInput: node.isRequired,
  onTicketDelete: func,
};

CartTicketLayout.defaultProps = {
  onTicketDelete: undefined,
};

export default CartTicketLayout;
