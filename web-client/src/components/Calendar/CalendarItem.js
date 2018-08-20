import React, { Component } from 'react';
import {Icon, CardPanel} from 'react-materialize';
import DateUtil from '../../util/DateUtil'

class CalendarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <CardPanel className="lighten-4 black-text">
        <h5>{ DateUtil.formatDate(this.props.start) }</h5>
        <p><b>{ this.props.title }</b></p>
        <p>{ this.props.description }</p>
      </CardPanel>
    );
  }
}

export default CalendarItem;
