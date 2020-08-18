// @flow
import React from 'react';
import { oneOf, string } from 'prop-types';
// $FlowFixMe //flow is confused by this special CRA function
import { ReactComponent as OnaLogo } from '../../images/logos/onalive.svg';

import './Logo.scss';

type Props = {
  color: 'white' | 'black',
  title: string,
};

const Logo = ({ color, title }: Props) => (
  <OnaLogo className={`logo-block logo-block--${color}`} title={title} />
);

Logo.propTypes = {
  color: oneOf(['white', 'black']).isRequired,
  title: string.isRequired,
};

export default Logo;
