import './event-feed.scss';
import React, { Component } from 'react';
import { Segment, Button, Icon } from 'semantic-ui-react';
import dateFormatter from '../../_utilities/dateFormatter'

class EventFeedItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let startDate;
    startDate = dateFormatter.formatDate(this.props.start);

    return (
      <div>
        <Segment>
          <h4>{ this.props.title }</h4>
          <p>{ this.props.data }</p>
          <p>{ startDate }</p>
          <p>{ this.props.description }</p>
          <Icon color="green" link name="calendar alternate outline"/>
        </Segment>
      </div>
    );
  }
}

export default EventFeedItem;
