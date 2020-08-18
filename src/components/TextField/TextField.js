// @flow
import React from 'react';
import PropTypes, { node } from 'prop-types';

import './TextField.scss';

type Props = {
  label: string,
  placeholder: string,
  input: mixed,
  icon: node,
  meta: {
    touched: boolean,
    error: boolean,
  },
  type: string,
};

const RenderTextField = ({
  label,
  placeholder,
  input,
  icon,
  meta: { touched, error },
  type,
}: Props) => {
  return (
    <div className="textfield">
      {label ? <div className="textfield__label">{label}</div> : null}
      <div className="textfield__inputwrap">
        <input
          className={`textfield__input${icon ? '--withicon' : ''}`}
          placeholder={placeholder}
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...input}
          type={type}
        />
        {icon ? <div className="textfield__icon">{icon}</div> : null}
      </div>
      {!!touched && !!error ? (
        <div className="textfield__error">{error}</div>
      ) : null}
    </div>
  );
};

RenderTextField.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  icon: PropTypes.node,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

RenderTextField.defaultProps = {
  placeholder: undefined,
  label: undefined,
  input: undefined,
  icon: undefined,
  meta: undefined,
};

export default RenderTextField;
