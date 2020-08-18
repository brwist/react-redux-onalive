// @flow
import { useEffect, useRef } from 'react';

type UsePrevious = (any) => any;

const usePrevious: UsePrevious = (value) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default usePrevious;
