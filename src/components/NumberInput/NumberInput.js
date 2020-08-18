// @flow
import React from 'react';
import { oneOfType, string, number, func } from 'prop-types';

import './NumberInput.scss';

type Props = {
  amountSelected: string | number,
  onAmountChange: (value: string | number) => void,
};

const NumberInput = ({ amountSelected, onAmountChange }: Props) => {
  const handleAmountChange = (e) => {
    onAmountChange(e.target.value);
  };
  const onPlusClick = () => {
    onAmountChange(Number(amountSelected) + 1);
  };
  const onMinusClick = () => {
    if (Number(amountSelected) === 0) return;
    onAmountChange(Number(amountSelected) - 1);
  };
  const onBlur = () => {
    if (amountSelected === '' || Number(amountSelected) < 0) {
      onAmountChange(0);
    }
  };

  return (
    <div className="number-input">
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus */}
      <div
        className="number-input__button"
        // eslint-disable-next-line react/jsx-no-bind
        onClick={onMinusClick}
        role="button"
      >
        -
      </div>
      <input
        className="number-input__input"
        type="number"
        // eslint-disable-next-line react/jsx-no-bind
        value={amountSelected}
        // eslint-disable-next-line react/jsx-no-bind
        onChange={handleAmountChange}
        // eslint-disable-next-line react/jsx-no-bind
        onBlur={onBlur}
      />
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus */}
      <div
        className="number-input__button"
        // eslint-disable-next-line react/jsx-no-bind
        onClick={onPlusClick}
        role="button"
      >
        +
      </div>
    </div>
  );
};

NumberInput.propTypes = {
  amountSelected: oneOfType([string, number]).isRequired,
  onAmountChange: func.isRequired,
};

export default NumberInput;
