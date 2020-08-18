// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import './styles/reset.scss';
import './styles/open-sans.scss';
import './styles/open-sans-condensed.scss';
import './styles/global.scss';
import './i18next';

const tagManagerArgs = {
  gtmId: process.env.REACT_APP_GOOGLE_TAG_MANAGER_ID,
};

TagManager.initialize(tagManagerArgs);

// $FlowFixMe
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
