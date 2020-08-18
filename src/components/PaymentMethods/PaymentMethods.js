import React from 'react';
import { ReactComponent as Vipps } from '../../images/payment-svg/vipps.svg';
import { ReactComponent as Visa } from '../../images/payment-svg/visa.svg';
import { ReactComponent as Mastercard } from '../../images/payment-svg/mastercard.svg';
import './PaymentMethods.scss';

const PaymentMethods = () => (
  <div className="payment-methods">
    <Vipps className="payment-methods__method" height="30px" />
    <Visa className="payment-methods__method" height="40px" />
    <Mastercard className="payment-methods__method" height="30px" />
  </div>
);

export default PaymentMethods;
