import React, { Component } from 'react';
import { CardPanel, Badge } from 'react-materialize';
import DateUtil from '../../util/DateUtil';
import PropTypes from 'prop-types';

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
          <p>{ this.props.date }</p>
          <p>{ this.props.description }</p>
        </CardPanel>
      </div>
    );
  }
}

FeedItem.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.string,
  description: PropTypes.string.isRequired,
}

export default FeedItem;
