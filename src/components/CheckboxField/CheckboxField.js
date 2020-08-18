// @flow
import React from 'react';
import PropTypes from 'prop-types';

import './CheckboxField.scss';

type Props = {
  label: any,
  input: {
    name: string,
  },
  meta: {
    touched: boolean,
    error: string,
  },
};

const RenderCheckboxField = ({
  label,
  input,
  meta: { touched, error },
}: Props) => {
  return (
    <div className="checkboxfield">
      <div className="checkboxfield__labelwrap">
        <input
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...input}
          id={input.name}
          type="checkbox"
        />
        <label htmlFor={input.name} className="checkboxfield__label">
          <div className="checkboxfield__labeltext">{label}</div>
        </label>
      </div>
      {!!touched && !!error ? (
        <div className="checkboxfield__error">{error}</div>
      ) : null}
    </div>
  );
};

RenderCheckboxField.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  input: PropTypes.shape({
    name: PropTypes.string,
  }),
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

RenderCheckboxField.defaultProps = {
  label: undefined,
  input: undefined,
  meta: undefined,
};

export default RenderCheckboxField;
