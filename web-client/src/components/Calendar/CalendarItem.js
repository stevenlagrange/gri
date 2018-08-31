import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import dateFormatter from '../../_utilities/dateFormatter';

class CalendarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <Segment>
        <h5>{ dateFormatter.formatDate(this.props.start) }</h5>
        <p><b>{ this.props.title }</b></p>
        <p>{ this.props.description }</p>
      </Segment>
    );
  }
}

export default CalendarItem;
