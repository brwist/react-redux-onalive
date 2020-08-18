// @flow
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes, { func } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { FaEnvelope } from 'react-icons/fa';
import TextField from '../../components/TextField/TextField';

import './LoginFormContainer.scss';

const required = (value) => (value && value !== '' ? undefined : 'Required');

type Props = {
  handleSubmit: func,
  pristine: boolean,
  submitting: boolean,
};

const LoginForm = ({ handleSubmit, pristine, submitting }: Props) => {
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <Field
        name="email"
        component={TextField}
        placeholder={t('EMAIL')}
        icon={<FaEnvelope size={20} color="#474b4f" />}
        validate={required}
      />
      <button
        type="submit"
        className="login-form__submit"
        disabled={pristine || submitting}
      >
        {t('SEND_ME_A_MAGIC_LINK')}
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'LoginForm',
})(LoginForm);
