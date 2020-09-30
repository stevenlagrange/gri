import './event-feed.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader, Item } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import EventItem from '../EventItem';


function getEventItems(items) {
  let eventItems;
  if (items) {
    eventItems = items.map(item => (
      <EventItem
        key={item.eid}
        id={item.eid}
        title={item.title}
        description={item.description}
        start={item.start}
      />
    ));
  } else {
    eventItems = (
      <Dimmer active>
        <Loader content="Loading" />
      </Dimmer>
    );
  }
  return eventItems;
}

function EventFeed({ events, isFetching }) {
  return (
    <div className="event-feed">
      <Item.Group>
        {getEventItems(events)}
      </Item.Group>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    events: state.eventsReducer.events,
    isFetching: state.eventsReducer.isFetching,
  };
};


export default connect(mapStateToProps, {})(EventFeed);
