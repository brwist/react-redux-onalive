// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import store from './store/configureStore';
import history from './history';
import AppContainer from './containers/AppContainer/AppContainer.js';
import HomePageContainer from './containers/HomePageContainer/HomePageContainer.js';
import ErrorPlaceholder from './components/ErrorPlaceholder/ErrorPlaceholder.js';
import EventPageContainer from './containers/EventPageContainer/EventPageContainer.js';
import OrganizerPageContainer from './containers/OrganizerPageContainer/OrganizerPageContainer.js';
import CartPageContainer from './containers/CartPageContainer/CartPageContainer.js';
import PurchaseTermsContainer from './containers/PurchaseTermsContainer/PurchaseTermsContainer.js';
import PrivacyPolicyContainer from './containers/PrivacyPolicyContainer/PrivacyPolicyContainer.js';
import AboutContainer from './containers/AboutContainer/AboutContainer.js';

class App extends React.Component<{}, { error: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      error: false,
    };
  }

  componentDidCatch(e: Error) {
    console.error(e);
    this.setState({ error: true });
  }

  NoMatch = () => {
    return (
      <Route
        // eslint-disable-next-line react/jsx-no-bind
        render={() => <Redirect to={{ pathname: '/' }} />}
      />
    );
  };

  render() {
    const { error } = this.state;
    if (error) return <ErrorPlaceholder />;

    return (
      <Provider store={store}>
        <Router history={history}>
          <AppContainer>
            <Switch>
              <Route exact path="/" component={HomePageContainer} />
              <Route path="/login" component={HomePageContainer} />
              <Route exact path="/events/:id" component={EventPageContainer} />
              <Route
                exact
                path="/organizers/:id"
                component={OrganizerPageContainer}
              />
              <Route exact path="/cart" component={CartPageContainer} />
              <Route path="/order/:status" component={CartPageContainer} />
              <Route
                path="/purchase-terms"
                component={PurchaseTermsContainer}
              />
              <Route
                path="/privacy-policy"
                component={PrivacyPolicyContainer}
              />
              <Route path="/about" component={AboutContainer} />
              <Route component={this.NoMatch} />
            </Switch>
          </AppContainer>
        </Router>
        <ToastContainer position="bottom-right" />
      </Provider>
    );
  }
}

export default App;
