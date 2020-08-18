// @flow
import React, { useRef, useEffect, useState } from 'react';
import { string, func } from 'prop-types';
import { InlineCheckout, Event } from '@bambora/checkout-sdk-web';

type Props = {
  link: string,
  onSuccess: () => void,
  onCancel: () => void,
};

const BamboraPayment = ({ link, onSuccess, onCancel }: Props) => {
  const container = useRef();
  const checkout = useRef(new InlineCheckout(null, { endpoint: link }));
  const [checkoutIsMounted, setCheckoutIsMounted] = useState(false);
  useEffect(() => {
    if (container.current && checkout.current && !checkoutIsMounted) {
      setCheckoutIsMounted(true);
      checkout.current.mount(container.current);
      checkout.current.on(Event.Authorize, () => {
        onSuccess();
      });
      checkout.current.on(Event.Cancel, () => {
        onCancel();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [container.current, container.current]);

  return (
    <div
      className="payment-layout__iframe"
      // eslint-disable-next-line react/jsx-no-bind
      ref={(ref) => {
        container.current = ref;
      }}
    />
  );
};

BamboraPayment.propTypes = {
  link: string.isRequired,
  onSuccess: func.isRequired,
  onCancel: func.isRequired,
};

export default BamboraPayment;
