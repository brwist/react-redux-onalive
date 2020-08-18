// @flow
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func, node } from 'prop-types';
import queryString from 'query-string';
import history from '../../history';
import * as authActions from '../../store/actions/auth';
import LoginModalContainer from '../LoginModalContainer/LoginModalContainer';
import HeaderContainer from '../HeaderContainer/HeaderContainer.js';
import FooterContainer from '../FooterContainer/FooterContainer.js';
import type { Ticket } from '../../components/CartTicketsList/UseCartTicketsList.js';

type Props = {
  location: {
    search: string,
    pathname: string,
  },
  children: node,
  authAction: {
    login: func,
    toggleLoginModal: func,
  },
  cart: {
    cart: Array<Ticket>,
    orderProcessed: boolean,
  },
};

const AppContainer = ({ location, children, authAction, cart }: Props) => {
  useEffect(() => {
    authAction.toggleLoginModal('');
  }, [authAction]);

  const queryParams = queryString.parse(location.search);
  if (queryParams && queryParams.token) {
    authAction.login(queryParams.token);
    history.push(cart.cart.length > 0 && !cart.orderProcessed ? '/cart' : '/');
  }

  return (
    <React.Fragment>
      <HeaderContainer isInnerPage={location.pathname !== '/'} />
      {children}
      <FooterContainer />
      <LoginModalContainer />
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authAction: bindActionCreators(authActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AppContainer));
