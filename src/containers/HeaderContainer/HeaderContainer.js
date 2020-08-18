// @flow
import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { func } from 'prop-types';
import Button from '../../components/Button/Button.js';
import Logo from '../../components/Logo/Logo.js';
import isEqual from '../../hooks/isEqual';
import * as authActions from '../../store/actions/auth';

import './HeaderContainer.scss';

type Props = {
  authAction: {
    receiveUserData: func,
    toggleLoginModal: func,
  },
  currentUser: any,
  isInnerPage?: boolean,
};

const HeaderContainer = ({ authAction, currentUser, isInnerPage }: Props) => {
  const { t } = useTranslation();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (currentUser && currentUser.user) {
      if (!isEqual(userData, currentUser.user)) {
        setUserData(currentUser.user);
      }
    }
  }, [userData, currentUser]);

  const logout = useCallback(() => {
    authAction.receiveUserData({ data: {} });
    setUserData({});
  }, [authAction]);

  const openLogin = useCallback(() => {
    authAction.toggleLoginModal('login');
  }, [authAction]);

  const openRegister = useCallback(() => {
    authAction.toggleLoginModal('register');
  }, [authAction]);

  return (
    <div className="header-block">
      <div className={isInnerPage ? 'header-block__inner' : ''}>
        <div className="header-block__container">
          <Link to="/">
            <div className="header-block__logo">
              <Logo color="white" title="OnaLive" />
            </div>
          </Link>
          <div className="header-block__buttons">
            {Object.keys(userData).length > 0 ? (
              <div className="header-block__userinfo">
                {t('YOU_ARE_LOGGED_IN_AS')}
                <br />
                {userData.name || 'Guest'} ({userData.email}) |{' '}
                <button
                  type="button"
                  className="header-block__logout"
                  onClick={logout}
                >
                  {t('LOG_OUT')}
                </button>
              </div>
            ) : (
              <React.Fragment>
                <div className="header-block__button">
                  <button type="button" onClick={openRegister}>
                    <Button type="link" text={t('REGISTER')} />
                  </button>
                </div>
                <div className="header-block__button">
                  <button type="button" onClick={openLogin}>
                    <Button type="main" text={t('LOG_IN')} />
                  </button>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

HeaderContainer.defaultProps = {
  isInnerPage: false,
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authAction: bindActionCreators(authActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
