// @flow
import React from 'react';
import { arrayOf, func } from 'prop-types';
import { eventShape } from '../../props/events.js';
import type { eventShapeFlow } from '../../props/events.js';
import EventCard from '../EventCard/EventCard.js';

import './EventCardList.scss';

type Props = {
  events: Array<eventShapeFlow>,
  t: func,
};
const EventCardList = ({ events, t }: Props) => {
  const listOfEvents = events.map((event) => (
    <EventCard
      key={event.id}
      id={event.id}
      title={event.title}
      image={event.image}
      description={event.description}
      startDate={event.starts_at}
      highlighted={event.highlighted}
      t={t}
    />
  ));

  return <div className="event-card-list-block">{listOfEvents}</div>;
};

EventCardList.propTypes = {
  events: arrayOf(eventShape).isRequired,
  t: func,
};

EventCardList.defaultProps = {
  t: undefined,
};

export default EventCardList;
