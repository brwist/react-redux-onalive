// @flow
import React from 'react';
import { string, oneOf, func } from 'prop-types';

import './Button.scss';

type Props = {
  text: string,
  type: string,
  onClick?: (e: SyntheticEvent<HTMLDivElement>) => void | Promise<void>, // TODO: should be required
};
const Button = ({ text, type, onClick }: Props) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus
  <div
    className={`button-block button-block--${type}`}
    onClick={onClick}
    role="button"
  >
    {text}
  </div>
);

Button.propTypes = {
  text: string.isRequired,
  type: oneOf(['ghost', 'main', 'link', 'ghost-bold']).isRequired,
  // eslint-disable-next-line react/require-default-props
  onClick: func, // TODO: should be required
};

export default Button;
