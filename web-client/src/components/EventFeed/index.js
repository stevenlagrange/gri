import './event-feed.scss';
import React from 'react';
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

function EventFeed({ items }) {
  return (
    <div className="event-feed">
      <Item.Group>
        { getEventItems(items) }
      </Item.Group>
    </div>
  );
}

EventFeed.propTypes = {
  items: PropTypes.array.isRequired,
};

export default EventFeed;
