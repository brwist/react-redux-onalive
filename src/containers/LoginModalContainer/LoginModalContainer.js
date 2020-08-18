// @flow
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdClose } from 'react-icons/md';
import PropTypes, { func } from 'prop-types';
import { useTranslation } from 'react-i18next';
import * as authActions from '../../store/actions/auth';
import LoginFormContainer from '../LoginFormContainer/LoginFormContainer';
import RegistrationFormContainer from '../RegistrationFormContainer/RegistrationFormContainer';
import ConfirmEmailContainer from '../ConfirmEmailContainer/ConfirmEmailContainer';

import './LoginModalContainer.scss';

type Props = {
  authAction: {
    register: func,
    getLink: func,
    toggleLoginModal: func,
  },
  loginModal: string,
};

const LoginModalContainer = ({ authAction, loginModal }: Props) => {
  const emailAddressRef = useRef({ email: '' });
  const { t } = useTranslation();
  const [activetab, setActivetab] = useState(0);

  useEffect(() => {
    return loginModal === 'login' && loginModal !== 'confirm'
      ? setActivetab(0)
      : setActivetab(1);
  }, [loginModal]);

  const close = useCallback(() => {
    authAction.toggleLoginModal('');
  }, [authAction]);

  const changeTabToLogin = useCallback(() => setActivetab(0), []);
  const changeTabToRegistration = useCallback(() => setActivetab(1), []);

  const login = useCallback(
    (values) => {
      emailAddressRef.current.email = values.email;
      authAction.getLink(values);
    },
    [authAction]
  );

  const register = useCallback(
    (values) => {
      emailAddressRef.current.email = values.email;
      authAction.register(values);
    },
    [authAction]
  );

  return loginModal !== '' ? (
    <div className="login-modal">
      <div className="login-modal__backdrop">
        <div className="login-modal__content-block">
          <button type="button" onClick={close}>
            <MdClose className="login-modal__close" size={20} color="#fff" />
          </button>

          {loginModal !== 'confirm' ? (
            <React.Fragment>
              <div className="login-modal__tabs">
                <button
                  type="button"
                  className={`login-modal__tab${
                    activetab === 0 ? '--active' : ''
                  }`}
                  onClick={changeTabToLogin}
                >
                  {t('LOG_IN')}
                </button>
                <button
                  type="button"
                  className={`login-modal__tab${
                    activetab === 1 ? '--active' : ''
                  }`}
                  onClick={changeTabToRegistration}
                >
                  {t('REGISTER')}
                </button>
              </div>
              <div className="login-modal__content">
                {activetab === 0 ? (
                  <div className="login-modal__login">
                    <LoginFormContainer onSubmit={login} />
                  </div>
                ) : (
                  <div className="login-modal__register">
                    <RegistrationFormContainer
                      onSubmit={register}
                      close={close}
                    />
                  </div>
                )}
              </div>
            </React.Fragment>
          ) : (
            <ConfirmEmailContainer email={emailAddressRef.current.email} />
          )}
        </div>
      </div>
    </div>
  ) : null;
};

LoginModalContainer.propTypes = {
  authAction: PropTypes.shape({
    register: PropTypes.func.isRequired,
    getLink: PropTypes.func.isRequired,
    toggleLoginModal: func.isRequired,
  }).isRequired,
  loginModal: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    loginModal: state.loginModal,
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
)(LoginModalContainer);
