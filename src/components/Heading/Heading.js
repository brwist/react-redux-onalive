// @flow
import React from 'react';
import { string, oneOf } from 'prop-types';

import './Heading.scss';

type Props = {
  text: string,
  size: string,
  type?: string,
  color: string,
};

const Heading = ({ text, size, color, type }: Props) => {
  switch (type) {
    case 'h1':
      return (
        <h1
          className={`heading-block heading-block--${size} heading-block--${color}`}
        >
          {text}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className={`heading-block heading-block--${size} heading-block--${color}`}
        >
          {text}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className={`heading-block heading-block--${size} heading-block--${color}`}
        >
          {text}
        </h3>
      );
    default:
      return (
        <div
          className={`heading-block heading-block--${size}  heading-block--${color}`}
        >
          {text}
        </div>
      );
  }
};

Heading.defaultProps = {
  type: 'div',
};
Heading.propTypes = {
  text: string.isRequired,
  size: oneOf(['large', 'medium', 'small']).isRequired,
  type: oneOf(['h1', 'h2', 'h3', 'div']),
  color: oneOf(['white', 'dark']).isRequired,
};

export default Heading;
