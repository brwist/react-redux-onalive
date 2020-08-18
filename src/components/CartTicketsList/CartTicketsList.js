// @flow
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { arrayOf, shape, func, string, number, bool } from 'prop-types';
import CartTicketLayout from '../../layouts/CartTicketLayout/CartTicketLayout.js';
import NumberInput from '../NumberInput/NumberInput.js';
import CheckboxField from '../CheckboxField/CheckboxField.js';
import Button from '../Button/Button.js';
import useCartTicketsList from './UseCartTicketsList';
import type { Ticket } from './UseCartTicketsList';
import './CartTicketsList.scss';

type Props = {
  tickets: Array<Ticket>,
  changeActiveTab: func,
  updateCart: func,
  t: func,
  isConfirmation: boolean,
  isLoggedIn?: boolean,
  openLogin?: () => void,
};

const CartItemsList = ({
  tickets,
  changeActiveTab,
  openLogin,
  isLoggedIn,
  updateCart,
  t,
  isConfirmation,
}: Props) => {
  const [isAgree, setIsAgree] = useState(false);

  const handleAgree = (e) => {
    setIsAgree(e.target.checked);
  };

  const {
    onTicketAmountChange,
    onTicketDelete,
    ticketsArray,
    totalAmount,
    totalPrice,
  } = useCartTicketsList(tickets, updateCart);

  const changeTab = isLoggedIn
    ? () => {
        changeActiveTab(1);
      }
    : () => {
        // $FlowFixMe
        openLogin();
      };

  return tickets.length > 0 ? (
    <div className="cart-tickets-list">
      <div className="cart-tickets-list__container">
        <div className="cart-tickets-list__header">
          <div className="cart-tickets-list__cart">
            <FaShoppingCart
              size={20}
              color="#666"
              className="cart-tickets-list__cartico"
            />
          </div>
          <div className="cart-tickets-list__ticket-type">
            {t('TICKET_TYPE')}
          </div>
          <div className="cart-tickets-list__event">{t('EVENT')}</div>
          <div className="cart-tickets-list__quantity">{t('QUANTITY')}</div>
          <div className="cart-tickets-list__price">{t('PRICE')}</div>
        </div>
        {ticketsArray.map((ticket) => {
          return (
            <CartTicketLayout
              key={ticket.id}
              title={ticket.title}
              event={ticket.event_title}
              eventId={ticket.event_id}
              price={ticket.price}
              currency={ticket.currency}
              // eslint-disable-next-line react/jsx-no-bind
              onTicketDelete={
                !isConfirmation ? () => onTicketDelete(ticket.id) : null
              }
              numberInput={
                !isConfirmation ? (
                  <NumberInput
                    amountSelected={ticket.amountSelected}
                    // eslint-disable-next-line react/jsx-no-bind
                    onAmountChange={(value) => {
                      onTicketAmountChange(ticket.id, value);
                    }}
                  />
                ) : (
                  <div className="cart-tickets-list__amount">
                    {ticket.amountSelected}
                  </div>
                )
              }
            />
          );
        })}
        <div className="cart-tickets-list__summary">
          <div className="cart-tickets-list__cart" />
          <div className="cart-tickets-list__total">{t('TOTAL')}</div>
          <div className="cart-tickets-list__goods">{totalAmount}</div>
          <div className="cart-tickets-list__price">{`${tickets[0].currency} ${totalPrice}`}</div>
        </div>
      </div>

      {!isConfirmation ? (
        <div className="cart-tickets-list__bottom">
          <div className="cart-tickets-list__checkbox">
            <CheckboxField
              label={
                <div>
                  {t('I_ACCEPT')}{' '}
                  <Link
                    to="/purchase-terms"
                    className="cart-tickets-list__link"
                    target="_blank"
                  >
                    {t('TERMS_OF_PURCHASE')}
                  </Link>
                </div>
              }
              meta={{ touched: true, error: '' }}
              input={{ name: 'proceed-to-payment', onChange: handleAgree }}
            />
          </div>
          <button
            type="button"
            // eslint-disable-next-line react/jsx-no-bind
            onClick={changeTab}
            className="cart-tickets-list__button"
            disabled={!isAgree}
          >
            <Button text={`${t('PROCEED_TO_PAYMENT')} >>`} type="main" />
          </button>
        </div>
      ) : null}
    </div>
  ) : (
    <div className="cart-tickets-list">
      <div className="cart-tickets-list__empty">{t('EMPTY_CARD_MESSAGE')}</div>
    </div>
  );
};

CartItemsList.propTypes = {
  tickets: arrayOf(
    shape({
      id: string.isRequired,
      title: string.isRequired,
      description: string,
      event_id: string.isRequired,
      event_title: string.isRequired,
      price: number.isRequired,
      currency: string.isRequired,
    })
  ).isRequired,
  changeActiveTab: func.isRequired,
  updateCart: func.isRequired,
  t: func.isRequired,
  isConfirmation: bool.isRequired,
  isLoggedIn: bool,
  openLogin: func,
};

CartItemsList.defaultProps = {
  isLoggedIn: false,
  openLogin: () => {},
};

export default CartItemsList;
