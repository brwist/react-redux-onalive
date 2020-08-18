// @flow
const isEqual = (a: any, b: any) => {
  let t;
  let result = true;

  if (a !== 'undefined' && a !== null) {
    Object.keys(a).map((p) => {
      if (typeof b[p] === 'undefined') {
        result = false;
      }
      if (b[p] && !a[p]) {
        result = false;
      }
      t = typeof a[p];
      if (t === 'object' && !isEqual(a[p], b[p])) {
        result = false;
      }
      if (
        t === 'function' &&
        (typeof b[p] === 'undefined' || a[p].toString() !== b[p].toString())
      ) {
        result = false;
      }
      if (a[p] !== b[p]) {
        result = false;
      }
      return null;
    });
  }

  if (b !== 'undefined' && b !== null) {
    Object.keys(b).map((p) => {
      if (typeof a[p] === 'undefined') {
        result = false;
      }
      return null;
    });
  }

  return result;
};

export default isEqual;
