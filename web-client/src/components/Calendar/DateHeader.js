import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import dateFormatter from '../../_utilities/dateFormatter';

class DateHeader extends Component {
  render() {
    let date;
    date = DateUtil.formatDate(this.props.date);

    return (
      <Segment>
        <p>{ date }</p>
      </Segment>
    );
  }
}

export default DateHeader;
