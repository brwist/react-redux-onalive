// @flow
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return {};
    }
    // $FlowFixMe
    return JSON.parse(serializedState);
  } catch (err) {
    return {};
  }
};

export const saveState = (state: mixed) => {
  try {
    const serializedState = JSON.stringify(state);
    // $FlowFixMe
    localStorage.setItem('state', serializedState);
    return null;
  } catch (err) {
    return {};
  }
};
