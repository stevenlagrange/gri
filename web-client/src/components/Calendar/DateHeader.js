import React, { Component } from 'react';
import {Icon, CardPanel} from 'react-materialize';
import DateUtil from '../../util/DateUtil'

class DateHeader extends Component {
  render() {
    let date;
    date = DateUtil.formatDate(this.props.date);

    return (
      <CardPanel className="lighten-4 black-text">
        <p>{ date }</p>
      </CardPanel>
    );
  }
}

export default DateHeader;
