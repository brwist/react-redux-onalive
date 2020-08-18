// @flow
import React from 'react';
// import { useTranslation } from 'react-i18next';
// import { TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti';
// import Button from '../../components/Button/Button.js';
// import Heading from '../../components/Heading/Heading.js';
import PaymentMethods from '../../components/PaymentMethods/PaymentMethods.js';

import './FooterContainer.scss';

const Footer = () => {
  // const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer__container">
        {/* <div className="footer__title-wrapper">
          <Heading
            text={t('REGISTER')}
            size="medium"
            type="h2"
            color="white"
          />
        </div>
        <div className="footer__subtitle-wrapper">
          <Heading
            text={t('FOOTER_SUBTITLE')}
            size="small"
            type="h3"
            color="white"
          />
        </div>
        <div className="footer__button">
          <Button text={t('REGISTER')} type="main" />
        </div>
        <div className="footer__separator" /> */}
        {/* <div className="footer__links">
          <div className="footer__links-col">
            <Button text={t('DISCLAIMER')} type="link" />
            <Button text={t('P_AND_S')} type="link" />
            <Button text={t('SUPPORT')} type="link" />
          </div>
          <div className="footer__links-col">
            <Button text={t('REGISTER')} type="link" />
            <Button text={t('ORG_CONDITIONS')} type="link" />
          </div>
          <div className="footer__links-col">
            <Button text={t('ABOUT_US')} type="link" />
            <Button text="facebook" type="link" />
            <Button text="twitter" type="link" />
          </div>
        </div> */}
        {/* <div className="footer__social">
          <div className="footer__icon">
            <TiSocialFacebook size={35} color="#666" />
          </div>
          <div className="footer__icon">
            <TiSocialTwitter size={35} color="#666" />
          </div>
        </div> */}
        <div className="footer__copyright">
          <PaymentMethods />
        </div>
        <div className="footer__copyright">One Nice Arena &copy; 2020</div>
        <div className="footer__copyright">Org nr: 923 028 803</div>

        <div className="footer__copyright">
          Kontakt oss:{' '}
          <a
            href="mailto:hei@onalive.no"
            target="_blank"
            rel="noopener noreferrer"
          >
            hei@onalive.no
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
