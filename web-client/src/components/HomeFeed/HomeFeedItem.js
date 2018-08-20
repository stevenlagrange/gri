import React, { Component } from 'react';
import { CardPanel, Badge } from 'react-materialize';
import DateUtil from '../../util/DateUtil'

class FeedItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CardPanel className="lighten-4 black-text">
          <h4>{ this.props.title }</h4>
          <p>Home Feed Item</p>
          <p>{ this.props.data }</p>
          <p>{ this.props.description }</p>
        </CardPanel>
      </div>
    );
  }
}

export default FeedItem;
