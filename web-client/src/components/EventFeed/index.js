import React, { Component } from 'react';
import { Preloader } from 'react-materialize';
import EventItem from './EventItem';


class EventFeed extends Component {
  constructor(props) {
    super(props);
  }


  getEventItems() {
    let eventItems;
    if(this.props.items) {
      const events = this.props.items;
      eventItems = events.map((item, i) =>
        <EventItem key={i}
          title={item.title}
          description={item.description}
          start={item.start}
        />
      );
    } else {
      eventItems = <Preloader size='big'/>;
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
