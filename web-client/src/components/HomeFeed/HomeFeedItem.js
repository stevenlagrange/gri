import React, { Component } from 'react';
import { CardPanel, Badge } from 'react-materialize';
import { Segment } from 'semantic-ui-react';
import dateFormatter from '../../_utilities/dateFormatter';
import PropTypes from 'prop-types';

class FeedItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="feed-item">
        <Segment>
          <h4>{ this.props.title }</h4>
          <p>{ this.props.date }</p>
          <p>{ this.props.description }</p>
        </Segment>
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
