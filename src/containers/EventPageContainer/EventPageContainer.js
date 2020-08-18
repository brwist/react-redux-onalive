// @flow
import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func } from 'prop-types';
import { useTranslation } from 'react-i18next';
import history from '../../history';
import * as eventsActions from '../../store/actions/events';
import * as cartActions from '../../store/actions/cart';

import EventHeader from '../../components/EventHeader/EventHeader.js';
import TicketsPicker from '../../components/TicketsPicker/TicketsPicker.js';
import Loader from '../../components/Loader/Loader.js';

import './EventPageContainer.scss';

type Props = {
  match: {
    params: {
      id: string,
    },
  },
  eventById: any,
  loading: boolean,
  eventsAction: func,
  cartAction: func,
};

const EventPageContainer = ({
  match,
  eventById,
  loading,
  eventsAction,
  cartAction,
}: Props) => {
  const { t } = useTranslation();

  useEffect(() => {
    eventsAction.fetchEventById(match.params.id);
  }, [eventsAction, match.params.id]);

  let event = eventById;

  const tickets =
    event && event.tickets
      ? event.tickets.filter((ticket) => ticket.type === 'ticket')
      : [];
  const courses =
    event && event.tickets
      ? event.tickets.filter((ticket) => ticket.type === 'course')
      : [];
  const minPrice =
    tickets && tickets.length > 0
      ? Math.min(...tickets.map((ticket) => ticket.price))
      : null;

  event = event && { ...event, minPrice };

  const proceedToCart = useCallback(
    (pickedTickets: {}) => {
      cartAction.proceedToCart(pickedTickets);
      history.push('/cart');
    },
    [cartAction]
  );

  return (
    <div className="event-page-layout">
      <div className="event-page-layout__container">
        {Object.keys(event).length > 1 ? (
          <EventHeader
            image={event.image}
            title={event.title}
            venue={event.venue}
            description={event.description}
            dateStart={event.starts_at}
            dateEnd={event.ends_at}
            minPrice={event.minPrice}
            currency={tickets[0] ? tickets[0].currency : 'NOK'}
            organizerId={event.organizer_id}
            organizerName={event.organizerTitle}
            loading={loading}
            t={t}
          />
        ) : (
          <Loader size="large" type="spinner" />
        )}
        {/* eslint-disable-next-line no-nested-ternary */}
        {tickets.length > 0 || courses.length > 0 ? (
          <TicketsPicker
            tickets={tickets}
            courses={courses}
            proceedToCart={proceedToCart}
            t={t}
          />
        ) : loading ? (
          <Loader size="large" type="spinner" />
        ) : null}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    eventById: state.eventById,
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    eventsAction: bindActionCreators(eventsActions, dispatch),
    cartAction: bindActionCreators(cartActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPageContainer);
