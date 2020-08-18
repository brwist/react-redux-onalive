// @flow
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { string } from 'prop-types';

type Props = {
  link: string,
};

const NetsPayment = ({ link }: Props) => {
  useEffect(() => {
    window.location.replace(link);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

NetsPayment.propTypes = {
  link: string.isRequired,
};

export default NetsPayment;
