// @flow
import React from 'react';
import { string, bool, func } from 'prop-types';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import Button from '../Button/Button.js';

import './EventCard.scss';

export type Event = {
  id: string,
  title: string,
  image: string,
  description: string,
  startDate: string,
  highlighted: boolean,
};

type EventWithTranslate = Event & {
  t: func,
};

const EventCard = ({
  id,
  title,
  image,
  description,
  startDate,
  highlighted,
  t,
}: EventWithTranslate) => {
  return (
    <div
      className={`event-card${highlighted ? ' event-card--highlighted' : ''}`}
    >
      <div
        className="event-card__bg"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="event-card__date">
          {format(new Date(startDate), 'dd MMM yyyy')}
        </div>
      </div>
      <div className="event-card__info">
        <div className="event-card__title">{title}</div>
        <div className="event-card__description">{description}</div>
        <Link to={`/events/${id}`}>
          <Button type="ghost" text={t('BUY_TICKET')} />
        </Link>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  image: string.isRequired,
  description: string.isRequired,
  startDate: string.isRequired,
  highlighted: bool.isRequired,
  t: func,
};

EventCard.defaultProps = {
  t: undefined,
};

export default EventCard;
