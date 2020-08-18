// @flow
import React from 'react';
import { string } from 'prop-types';
import { useTranslation } from 'react-i18next';
import Heading from '../../components/Heading/Heading';
import './ConfirmEmailContainer.scss';

type Props = {
  email: string,
};

const ConfirmEmail = ({ email }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="confirm-email">
      <Heading
        text={t('EMAIL_IS_ON_THE_WAY')}
        size="small"
        color="white"
        type="h1"
        className="confirm-email__h1"
      />
      <div className="confirm-email__text">
        <p className="confirm-email__p">
          {t('CHECK_EMAIL_TEXT1')}{' '}
          <a className="confirm-email__link" href={`mailto:${email}`}>
            {email}
          </a>
        </p>
        <p className="confirm-email__p">{t('CHECK_EMAIL_TEXT2')}</p>
        <p className="confirm-email__p">{t('CHECK_EMAIL_TEXT3')}</p>
      </div>
      <Heading
        text={t('CHECK_YOUR_EMAIL')}
        size="small"
        color="white"
        type="h1"
        className="confirm-email__h1"
      />
    </div>
  );
};

ConfirmEmail.propTypes = {
  email: string.isRequired,
};

export default ConfirmEmail;
