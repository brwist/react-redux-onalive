// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func } from 'prop-types';
import { useTranslation } from 'react-i18next';
import * as organizersActions from '../../store/actions/organizers';

import OrganizerHeader from '../../components/OrganizerHeader/OrganizerHeader.js';
import Loader from '../../components/Loader/Loader.js';
import Heading from '../../components/Heading/Heading.js';
import EventCardList from '../../components/EventCardList/EventCardList.js';

import './OrganizerPageContainer.scss';

type Props = {
  match: {
    params: {
      id: string,
    },
  },
  organizerById: any,
  loading: boolean,
  organizersAction: func,
};

const OrganizerPageContainer = ({
  match,
  organizerById,
  loading,
  organizersAction,
}: Props) => {
  const { t } = useTranslation();

  useEffect(() => {
    organizersAction.fetchOrganizerById(match.params.id);
  }, [organizersAction, match.params.id]);

  const organizer = organizerById;
  const events =
    Object.keys(organizer).length > 0
      ? organizer.events.map((event) => ({ ...event, highlighted: false }))
      : [];

  return (
    <div className="organizer-page-layout">
      <div className="organizer-page-layout__container">
        {/* eslint-disable-next-line no-nested-ternary */}
        {Object.keys(organizer).length > 0 ? (
          <OrganizerHeader
            logoImage={organizer.logo_image}
            heroImage={organizer.hero_image}
            title={organizer.title}
            description={organizer.description}
            twitterUrl={organizer.twitter_url}
            facebookUrl={organizer.facebook_url}
            t={t}
          />
        ) : loading ? (
          <Loader size="large" type="spinner" />
        ) : null}
        {/* eslint-disable-next-line no-nested-ternary */}
        {events.length > 0 ? (
          <React.Fragment>
            <div className="organizer-page-layout__header-wrapper">
              <Heading
                text={t('UPCOMING_EVENTS')}
                size="medium"
                color="white"
                type="h2"
              />
            </div>
            <EventCardList events={events} t={t} />
          </React.Fragment>
        ) : loading ? (
          <Loader size="large" type="spinner" />
        ) : null}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    organizerById: state.organizerById,
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    organizersAction: bindActionCreators(organizersActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizerPageContainer);
