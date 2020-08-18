// @flow
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loading from './loading';
import currentUser from './currentUser';
import loginModal from './loginModal';
import events from './events';
import eventById from './eventById';
import organizerById from './organizerById';
import cart from './cart';

const rootReducer = combineReducers({
  loading,
  currentUser,
  loginModal,
  events,
  eventById,
  organizerById,
  cart,
  form: formReducer,
});

export default rootReducer;
