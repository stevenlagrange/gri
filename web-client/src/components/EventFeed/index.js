import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import EventFeedItem from './EventFeedItem';


class EventFeed extends Component {
  constructor(props) {
    super(props);
  }


  getEventItems() {
    let eventItems;
    if(this.props.items) {
      const events = this.props.items;
      eventItems = events.map((item, i) =>
        <EventFeedItem key={i}
          title={item.title}
          description={item.description}
          start={item.start}
        />
      );
    } else {
      eventItems = <Dimmer active>
        <Loader content='Loading' />
      </Dimmer>;
    }
    return eventItems;
  }

  render() {
    return (
      <div className='event-feed'>
        <div className='feed-items'>
          { this.getEventItems() }
        </div>
      </div>
    )
  }
}

export default EventFeed;
