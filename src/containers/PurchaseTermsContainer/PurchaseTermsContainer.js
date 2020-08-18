// @flow
import React from 'react';
import { useTranslation } from 'react-i18next';

import './PurchaseTermsContainer.scss';

const PurchaseTermsContainer = () => {
  const { t } = useTranslation();

  return (
    <div className="purchase-terms">
      <div className="purchase-terms__container">
        <div className="purchase-terms__header">{t('TERMS_OF_PURCHASE')}</div>
        <div className="purchase-terms__text">
          {t('TERMS_OF_PURCHASE_TEXT1')}{' '}
          <a href="mailto:hei@onalive.no" className="purchase-terms__link">
            hei@onalive.no
          </a>{' '}
          {t('TERMS_OF_PURCHASE_TEXT2')}
        </div>
      </div>
    </div>
  );
};

export default PurchaseTermsContainer;
