// @flow
import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import InfoBar from '../InfoBar/InfoBar.js';
import type { InfoBarProps } from '../InfoBar/InfoBar.js';

import './InfoTable.scss';

type Props = {
  data: Array<InfoBarProps>,
};

const InfoTable = ({ data }: Props) => (
  <div className="info-table">
    {data.map(({ title, description, color }) => (
      <InfoBar
        key={title}
        title={title}
        description={description}
        color={color}
      />
    ))}
  </div>
);

InfoTable.propTypes = {
  data: arrayOf(
    shape({
      title: string.isRequired,
      description: string.isRequired,
      color: string,
    })
  ).isRequired,
};

export default InfoTable;
