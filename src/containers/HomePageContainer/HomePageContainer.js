// @flow
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func } from 'prop-types';
import * as eventsActions from '../../store/actions/events';
import * as authActions from '../../store/actions/auth';

import PromoLayout from '../../layouts/PromoLayout/PromoLayout.js';
import Button from '../../components/Button/Button.js';
import Heading from '../../components/Heading/Heading.js';
import EventCardList from '../../components/EventCardList/EventCardList.js';
import Loader from '../../components/Loader/Loader.js';

import './HomePageContainer.scss';

type Props = {
  events: any,
  loading: boolean,
  eventActions: {
    fetchAllEvents: func,
  },
  authAction: {
    toggleLoginModal: func,
  },
  currentUser: any,
};

const HomePageContainer = ({
  events,
  loading,
  eventActions,
  authAction,
  currentUser,
}: Props) => {
  const { t } = useTranslation();

  useEffect(() => {
    eventActions.fetchAllEvents();
  }, [eventActions]);

  const eventsData =
    Object.keys(events).length > 0
      ? Object.keys(events).map((key) => events[key])
      : [];

  // $FlowFixMe
  const highLightedEvents = eventsData.filter((e) => e.highlighted);
  const nonHighLightedEvents = eventsData.filter((e) => !e.highlighted);

  const openRegister = useCallback(() => {
    authAction.toggleLoginModal('register');
  }, [authAction]);

  return (
    <React.Fragment>
      <div className="home-page-layout">
        <PromoLayout
          t={t}
          button={
            !currentUser.user ? (
              <Button
                onClick={openRegister}
                type="ghost-bold"
                text={t('REGISTER')}
              />
            ) : null
          }
        />
        <div className="home-page-layout__container">
          {/* eslint-disable-next-line no-nested-ternary */}
          {highLightedEvents.length > 0 ? (
            <React.Fragment>
              <div className="home-page-layout__header-wrapper">
                <Heading
                  text={t('SELECTED_EVENTS')}
                  size="medium"
                  color="white"
                  type="h2"
                />
              </div>
              <EventCardList events={highLightedEvents} t={t} />
            </React.Fragment>
          ) : loading ? (
            <Loader size="large" type="spinner" />
          ) : null}
          {/* eslint-disable-next-line no-nested-ternary */}
          {nonHighLightedEvents.length > 0 ? (
            <React.Fragment>
              <div className="home-page-layout__header-wrapper">
                <Heading
                  text={t('MOST_POPULAR')}
                  size="medium"
                  color="white"
                  type="h2"
                />
              </div>
              <EventCardList events={nonHighLightedEvents} t={t} />
            </React.Fragment>
          ) : loading ? (
            <Loader size="large" type="spinner" />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    events: state.events,
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    eventActions: bindActionCreators(eventsActions, dispatch),
    authAction: bindActionCreators(authActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
