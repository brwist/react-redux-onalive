// @flow
import React from 'react';
import { oneOf } from 'prop-types';
import './loader.scss';

type Props = {
  size: string,
  type: string,
};

const Loader = ({ size, type }: Props) => (
  <div className={`loader loader--${size}`}>
    <div className="loader__outer">
      {type === 'spinner' ? (
        <React.Fragment>
          <div className={`loader__spin loader__spin--${size}`} />
          <div
            className={`loader__spin loader__spin--second loader__spin--${size}`}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="loader__inline loader__inline--first" />
          <div className="loader__inline loader__inline--second" />
          <div className="loader__inline loader__inline--third" />
          <div className="loader__inline loader__inline--fourth" />
        </React.Fragment>
      )}
    </div>
  </div>
);

Loader.propTypes = {
  size: oneOf(['large', 'medium', 'small']).isRequired,
  type: oneOf(['spinner', 'inline']).isRequired,
};

export default Loader;
