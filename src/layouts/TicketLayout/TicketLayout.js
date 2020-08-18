// @flow
import React from 'react';
import type { Node } from 'react';
import { string, node, number } from 'prop-types';

import './TicketLayout.scss';

type Props = {
  title: string,
  description?: string,
  price: number,
  currency: string,
  numberInput: Node,
};

const TicketLayout = ({
  title,
  description,
  price,
  currency,
  numberInput,
}: Props) => (
  <div className="ticket">
    <div className="ticket__title">{title}</div>
    <div className="ticket__description">{description}</div>
    {numberInput}
    <div className="ticket__price">{`${currency} ${price}`}</div>
  </div>
);

TicketLayout.propTypes = {
  title: string.isRequired,
  description: string,
  price: number.isRequired,
  currency: string.isRequired,
  numberInput: node.isRequired,
};

TicketLayout.defaultProps = {
  description: null,
};

export default TicketLayout;
