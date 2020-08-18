// @flow
import React from 'react';
import { func, string } from 'prop-types';
import { TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti';

import './OrganizerHeader.scss';

type Props = {
  logoImage: string,
  heroImage: string,
  title: string,
  description?: string,
  facebookUrl?: string,
  twitterUrl?: string,
  t: func,
};

const OrganizerHeader = ({
  logoImage,
  heroImage,
  title,
  description,
  facebookUrl,
  twitterUrl,
  t,
}: Props) => {
  return (
    <div className="organizer-header">
      <div
        className="organizer-header__image"
        style={{ backgroundImage: `url("${heroImage}")` }}
      />
      <div className="organizer-header__info">
        <img className="organizer-header__logo" src={logoImage} alt="logo" />
        <div className="organizer-header__info-text-block">
          <div className="organizer-header__title">{title}</div>
          <div className="organizer-header__description">{description}</div>
          <div className="organizer-header__more-info">{`${t(
            'MORE_INFO'
          )}...`}</div>
        </div>
        <div className="organizer-header__buttons">
          {facebookUrl && (
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
              <div className="organizer-header__icon organizer-header__icon">
                <TiSocialFacebook size={35} color="#666" />
              </div>
            </a>
          )}
          {twitterUrl && (
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
              <div className="organizer-header__icon">
                <TiSocialTwitter size={35} color="#666" />
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

OrganizerHeader.propTypes = {
  logoImage: string.isRequired,
  heroImage: string.isRequired,
  title: string.isRequired,
  description: string,
  facebookUrl: string,
  twitterUrl: string,
};

OrganizerHeader.defaultProps = {
  description: '',
  facebookUrl: '',
  twitterUrl: '',
};

export default OrganizerHeader;
