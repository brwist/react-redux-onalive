// @flow
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes, { func } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaUser, FaMobile } from 'react-icons/fa';
import TextField from '../../components/TextField/TextField';
import CheckboxField from '../../components/CheckboxField/CheckboxField';

import './RegistrationFormContainer.scss';

const required = (value) => (value && value !== '' ? undefined : 'Required');

type Props = {
  handleSubmit: func,
  pristine: boolean,
  submitting: boolean,
};

const RegistrationForm = ({ handleSubmit, pristine, submitting }: Props) => {
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <Field
        name="name"
        component={TextField}
        placeholder={t('NAME')}
        icon={<FaUser size={20} color="#474b4f" />}
        validate={required}
      />
      <Field
        name="email"
        component={TextField}
        placeholder={t('EMAIL')}
        icon={<FaEnvelope size={20} color="#474b4f" />}
        validate={required}
      />
      <Field
        name="phone"
        component={TextField}
        placeholder={t('MOBILE_NUMBER')}
        icon={<FaMobile size={20} color="#474b4f" />}
        validate={required}
      />
      <Field
        name="check1"
        label={
          <div role="presentation">
            {t('I_ACCEPT')}{' '}
            <Link
              to="/privacy-policy"
              className="registration-form__link"
              target="_blank"
            >
              {t('PRIVACY_POLICY')}
            </Link>
          </div>
        }
        component={CheckboxField}
        validate={required}
      />
      <Field
        name="check2"
        label={
          <div role="presentation">
            {t('I_ACCEPT')}{' '}
            <Link
              to="/purchase-terms"
              className="registration-form__link"
              target="_blank"
            >
              {t('TERMS_OF_PURCHASE')}
            </Link>
          </div>
        }
        component={CheckboxField}
        validate={required}
      />
      <Field
        name="check3"
        label={t('ACCEPT_INFO_VIA_EMAIL')}
        component={CheckboxField}
        validate={required}
      />
      <button
        type="submit"
        className="registration-form__submit"
        disabled={pristine || submitting}
      >
        {t('SEND_ME_A_MAGIC_LINK')}
      </button>
    </form>
  );
};

RegistrationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'RegistrationForm',
})(RegistrationForm);
