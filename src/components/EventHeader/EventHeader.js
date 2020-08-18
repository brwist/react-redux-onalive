// @flow
import React from 'react';
import { string, number, bool, func } from 'prop-types';
// import { TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import InfoTable from '../InfoTable/InfoTable.js';

import './EventHeader.scss';
import Loader from '../Loader/Loader.js';

type Props = {
  image: string,
  title: string,
  venue?: string,
  description?: string,
  dateStart: string,
  dateEnd: string,
  minPrice?: number,
  currency: string,
  organizerId: string,
  organizerName?: string,
  loading: boolean,
  t: func,
};

const EventHeader = ({
  image,
  title,
  description,
  venue,
  dateStart,
  dateEnd,
  minPrice,
  currency,
  organizerId,
  organizerName,
  loading,
  t,
}: Props) => {
  const infoTableData = [
    ...(venue
      ? [
          {
            title: t('PLACE'),
            description: venue,
            color: 'green',
          },
        ]
      : []),
    {
      title: t('DATE'),
      description: format(new Date(dateStart), 'dd MMM yyyy'),
    },
    {
      title: t('TIME'),
      description: `${format(new Date(dateStart), 'hh:mm')} - ${format(
        new Date(dateEnd),
        'hh:mm'
      )}`,
    },
    ...(minPrice
      ? [
          {
            title: t('PRICE'),
            description: `${t('FROM')} ${currency} ${minPrice}`,
          },
        ]
      : []),
  ];

  return (
    <div className="event-header">
      <div
        className="event-header__image"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      >
        <div className="event-header__date">
          {format(new Date(dateStart), 'dd MMM yyyy')}
        </div>
      </div>
      <div className="event-header__info">
        <div className="event-header__info-text-block">
          <div className="event-header__title">{title}</div>
          <div className="event-header__organizer">
            {t('ARRANGER')}
            {loading ? (
              <Loader size="small" type="inline" />
            ) : (
              <Link to={`/organizers/${organizerId}`}>
                <div className="event-header__organizer-link">
                  {organizerName}
                </div>
              </Link>
            )}
          </div>
          <div className="event-header__description">{description}</div>
          {/* <div className="event-header__more-info">{`${t(
            'MORE_INFO'
          )}...`}</div> */}
        </div>
        <InfoTable data={infoTableData} />
        {/* <div className="event-header__buttons">
          <div className="event-header__icon">
            <TiSocialFacebook size={35} color="#666" />
          </div>
          <div className="event-header__icon">
            <TiSocialTwitter size={35} color="#666" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

EventHeader.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  venue: string,
  description: string,
  dateStart: string.isRequired,
  dateEnd: string.isRequired,
  minPrice: number,
  currency: string.isRequired,
  organizerId: string.isRequired,
  organizerName: string,
  loading: bool.isRequired,
  t: func,
};

EventHeader.defaultProps = {
  minPrice: null,
  venue: null,
  description: '',
  organizerName: null,
  t: undefined,
};

export default EventHeader;
