import React, { Component } from 'react';
import { CardPanel } from 'react-materialize';
import DateUtil from '../../util/DateUtil'

class FeedItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let date;
    date = DateUtil.formatDate(this.props.start);


    return (
      <div>
        <CardPanel className="lighten-4 black-text">
          <h4>{ this.props.title }</h4>
          <p>{ this.props.data }</p>
          <p>{ date }</p>
          <p>{ this.props.description }</p>
        </CardPanel>
      </div>
    );
  }
}

export default FeedItem;
