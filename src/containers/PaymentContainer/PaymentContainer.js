// @flow
import React, { useEffect, useState } from 'react';
import { string, func, arrayOf, shape, number } from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader/Loader.js';
import BamboraPayment from '../../components/BamboraPayment/BamboraPayment.js';
import NetsPayment from '../../components/NetsPayment/NetsPayment.js';

import './PaymentContainer.scss';

const { REACT_APP_PAYMENT_PROVIDER, REACT_APP_SERVER_ENDPOINT } = process.env;

type Props = {
  eventId: string,
  ticketIds: {
    id: string,
    quantity: number,
  }[],
  token: string,
  changeActiveTab: (tabIndex: number) => void,
  changeOrderNumber: (orderNumber: string) => void,
};

const PaymentContainer = ({
  eventId,
  ticketIds,
  token,
  changeActiveTab,
  changeOrderNumber,
}: Props) => {
  const [paymentLink, setPaymentLink] = useState('');

  useEffect(() => {
    axios({
      // $FlowFixMe
      url: `${REACT_APP_SERVER_ENDPOINT}api/v1/invoices/create`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        authtoken: token,
      },
      data: {
        event_id: eventId,
        tickets: ticketIds,
        payment_provider: REACT_APP_PAYMENT_PROVIDER || 'nets',
      },
    })
      .then((res) => {
        setPaymentLink(res.data.data.url);
        changeOrderNumber(
          res.data.data[
            REACT_APP_PAYMENT_PROVIDER === 'bambora'
              ? 'bamboraOrderId'
              : 'netsOrderId'
          ]
        );
      })
      .catch(() => {
        toast('There is something wrong with payment processor. Try again.', {
          type: 'error',
        });
        changeActiveTab(0);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSuccess = () => {
    changeActiveTab(3);
  };

  const onCancel = () => {
    changeActiveTab(0);
  };

  if (!paymentLink) {
    return (
      <div className="payment-layout">
        <Loader size="large" type="spinner" />
      </div>
    );
  }

  return (
    <div className="payment-layout">
      {REACT_APP_PAYMENT_PROVIDER === 'bambora' ? (
        <BamboraPayment
          link={paymentLink}
          // eslint-disable-next-line react/jsx-no-bind
          onSuccess={onSuccess}
          // eslint-disable-next-line react/jsx-no-bind
          onCancel={onCancel}
        />
      ) : (
        <NetsPayment link={paymentLink} />
      )}
    </div>
  );
};

PaymentContainer.propTypes = {
  eventId: string.isRequired,
  ticketIds: arrayOf(shape({ id: string, quantity: number })).isRequired,
  token: string.isRequired,
  changeActiveTab: func.isRequired,
  changeOrderNumber: func.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.currentUser.token,
});

export default connect(mapStateToProps)(PaymentContainer);
