// @flow
import React from 'react';
import { string } from 'prop-types';

import './InfoBar.scss';

export type InfoBarProps = {
  title: string,
  description: string,
  color?: string,
};

const InfoBar = ({ title, description, color }: InfoBarProps) => (
  <div className="info-bar">
    <div className="info-bar__title">{title}</div>
    <div
      className={`info-bar__description${
        color ? ` info-bar__description--${color}` : ''
      }`}
    >
      {description}
    </div>
  </div>
);

InfoBar.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  color: string,
};

InfoBar.defaultProps = {
  color: null,
};

export default InfoBar;
