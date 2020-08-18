// @flow
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import usePrevious from './previous.js';

const { REACT_APP_SERVER_ENDPOINT } = process.env;

// simple emulation of react-apollo hooks for REST API
// eslint-disable-next-line import/prefer-default-export
export const useQuery = (
  address: string,
  token?: string
): [any, { loading: boolean, error: boolean }] => {
  const [data, setData] = useState(undefined);
  const [notFetched, setNotFetched] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const prevError = usePrevious(error);
  useEffect(() => {
    if (!prevError && error) {
      toast('Unexpected error occurred!', { type: 'error' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const fetchQuery = async () => {
    setNotFetched(false);
    setLoading(true);
    setError(false);
    try {
      // $FlowFixMe
      const res = await axios.get(`${REACT_APP_SERVER_ENDPOINT}${address}`, {
        headers: token
          ? {
              'Content-Type': 'application/json',
              authtoken: token,
            }
          : {
              'Content-Type': 'application/json',
            },
      });
      if (!(res && res.status >= 200 && res.status < 300)) {
        setError(true);
        setLoading(false);
        return;
      }
      setData(res.data);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  };

  if (notFetched) fetchQuery();

  return [data, { loading, error, refetch: fetchQuery }];
};
