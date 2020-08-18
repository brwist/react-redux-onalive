// @flow
import React, { useCallback, useEffect, useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { parse } from 'query-string';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useTranslation } from 'react-i18next';
import { func } from 'prop-types';
import { MdShoppingBasket } from 'react-icons/md';
import { format } from 'date-fns';
import * as cartActions from '../../store/actions/cart';

import Loader from '../../components/Loader/Loader.js';
import PaymentContainer from '../PaymentContainer/PaymentContainer';
import CartTicketsList from '../../components/CartTicketsList/CartTicketsList';
import Steps from '../../components/Steps/Steps';
import type { Ticket } from '../../components/CartTicketsList/UseCartTicketsList';
import type { Event } from '../../components/EventCard/EventCard';

import './CartPageContainer.scss';
import NetsConfirmLoading from '../../components/NetsConfirmLoading/NetsConfirmLoading.js';
import * as authActions from '../../store/actions/auth.js';

type Props = {
  match: {
    params: {
      status: string,
    },
  },
  location: {
    search: string,
  },
  loading: boolean,
  cart: Array<Ticket>,
  orderProcessed: boolean,
  events: Array<Event>,
  cartAction: func,
  authAction: {
    toggleLoginModal: (action: string) => void,
  },
  currentUser: {
    token?: string,
    user?: {
      email: string,
    },
  },
};

const CartPageContainer = ({
  match,
  location,
  loading,
  cart,
  orderProcessed,
  events,
  cartAction,
  authAction,
  currentUser,
}: Props) => {
  const { t } = useTranslation();

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [orderNumber, setOrderNumber] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (match.params.status) {
      if (
        match.params.status === 'nets-confirm-loading' &&
        activeTabIndex !== 2
      ) {
        setActiveTabIndex(2);
      } else if (match.params.status === 'success' && activeTabIndex !== 3) {
        setActiveTabIndex(3);
      }
    }
  });

  const openLogin = useCallback(() => {
    authAction.toggleLoginModal('login');
  }, [authAction]);

  const updateCart = useCallback(
    (tickets) => {
      cartAction.proceedToCart(tickets);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cartAction]
  );

  useEffect(() => {
    if (activeTabIndex === 3) {
      cartAction.processOrder();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTabIndex]);

  if (cart.length === 0 || (orderProcessed && activeTabIndex !== 3))
    return <Redirect to="/" />;

  const steps = [
    {
      title: t('CART'),
      content: (
        <CartTicketsList
          tickets={cart}
          events={events}
          changeActiveTab={setActiveTabIndex}
          updateCart={updateCart}
          t={t}
          isConfirmation={false}
          openLogin={openLogin}
          isLoggedIn={!!currentUser.user}
        />
      ),
    },
    {
      title: t('PAYMENT'),
      content: (
        <PaymentContainer
          eventId={cart[0].event_id}
          ticketIds={cart.map((ticket) => ({
            id: ticket.id,
            quantity: ticket.amountSelected,
          }))}
          changeActiveTab={setActiveTabIndex}
          changeOrderNumber={setOrderNumber}
        />
      ),
    },
    {
      title: t('ORDER_PROCESSING'),
      content: (
        <NetsConfirmLoading
          changeActiveTab={setActiveTabIndex}
          token={currentUser.token}
        />
      ),
    },
    {
      title: t('ORDER_CONFIRMATION'),
      subheader: (
        <div className="cart-page-layout__subheader">
          <div className="cart-page-layout__order-info">
            <div className="cart-page-layout__ordertitle">
              {t('THANKS_FOR_ORDER')}
            </div>
            <div className="cart-page-layout__orderdata">
              {`${t('ORDER_NUMBER')}: ${
                orderNumber || parse(location.search).orderId
              }`}
            </div>
            <div className="cart-page-layout__orderdata">
              {`${t('BOOKING_DATE')}: ${format(new Date(), 'dd MMM yyyy')}`}
            </div>
            <div className="cart-page-layout__ordertext">
              <p className="cart-page-layout__ordertext-p">
                {t('ORDER_CONFIRMATION1')}{' '}
                <a
                  href={`mailto:${
                    currentUser.user ? currentUser.user.email : ''
                  }`}
                  className="cart-page-layout__ordertext-link"
                >
                  {currentUser.user ? currentUser.user.email : ''}
                </a>{' '}
                {t('ORDER_CONFIRMATION2')}
              </p>
              <p className="cart-page-layout__ordertext-p">
                {t('ORDER_CONFIRMATION3')}
                <br />
                {t('ORDER_CONFIRMATION4')}
              </p>
              <p className="cart-page-layout__ordertext-p">
                {t('ORDER_CONFIRMATION5')}
              </p>
            </div>
            <div className="cart-page-layout__ordertitle">
              {t('YOUR_ORDER')}
            </div>
          </div>
          <div className="cart-page-layout__order-icon">
            <MdShoppingBasket size={100} color="#86c232" />
          </div>
        </div>
      ),
      content: (
        <CartTicketsList
          tickets={cart}
          events={events}
          changeActiveTab={setActiveTabIndex}
          updateCart={updateCart}
          t={t}
          isConfirmation
        />
      ),
    },
  ];

  return (
    <div className="cart-page-layout with-bg">
      <div className="cart-page-layout__container">
        <Steps steps={steps} activeTab={activeTabIndex} />
        {loading ? <Loader size="large" type="spinner" /> : null}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    orderProcessed: state.cart.orderProcessed,
    events: state.events,
    loading: state.loading,
    currentUser: state.currentUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cartAction: bindActionCreators(cartActions, dispatch),
    authAction: bindActionCreators(authActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CartPageContainer));
