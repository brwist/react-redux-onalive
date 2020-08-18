// @flow
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { parse } from 'query-string';
import { string, func } from 'prop-types';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from '../Loader/Loader.js';

const { REACT_APP_SERVER_ENDPOINT } = process.env;

type Props = {
  token?: string,
  history: {
    push: any,
  },
  location: {
    search: string,
  },
  changeActiveTab: (tab: number) => void,
};

const NetsConfirmLoading = ({
  token,
  history,
  location,
  changeActiveTab,
}: Props) => {
  useEffect(() => {
    if (parse(location.search).responseCode === 'OK') {
      const orderId = parse(location.search).transactionId;
      axios({
        // $FlowFixMe
        url: `${REACT_APP_SERVER_ENDPOINT}api/v1/invoices/nets-verify`,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          authtoken: token,
        },
        data: {
          order_id: orderId,
        },
      })
        .then(() => {
          history.push(`/order/success?orderId=${orderId}`);
        })
        .catch((e) => {
          console.error(e);
          toast('There is something wrong. Try again.', { type: 'error' });
        });
    } else {
      history.push('/cart');
      changeActiveTab(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="payment-layout">
      <Loader size="large" type="spinner" />
    </div>
  );
};

NetsConfirmLoading.propTypes = {
  token: string.isRequired,
  changeActiveTab: func.isRequired,
};

export default withRouter(NetsConfirmLoading);
