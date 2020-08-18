// @flow
import React from 'react';
import type { Node } from 'react';
import { func, node } from 'prop-types';
import Heading from '../../components/Heading/Heading.js';

import './PromoLayout.scss';

type Props = {
  t: func,
  button?: Node,
};
const PromoLayout = ({ t, button }: Props) => {
  return (
    <div className="promo-layout">
      <div className="promo-layout__container">
        <div className="promo-layout__title">
          <Heading text={t('TITLE')} size="large" color="white" type="h1" />
        </div>
        <div className="promo-layout__subtitle">
          <Heading text={t('SUBTITLE')} size="small" color="white" type="h2" />
        </div>
        {button}
      </div>
    </div>
  );
};

PromoLayout.propTypes = {
  t: func.isRequired,
  button: node,
};

PromoLayout.defaultProps = {
  button: undefined,
};

export default PromoLayout;
