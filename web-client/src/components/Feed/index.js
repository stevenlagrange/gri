import React, { Component } from 'react';
import { Preloader } from 'react-materialize';
import API from '../../api';
import FeedItem from './FeedItem';

class Feed extends Component {
  constructor(props) {
    super(props);
  }

  getFeedItems() {
    let feedItems;
    if(this.props.items) {
      const data = this.props.items;
      feedItems = data.map((item, i) =>
        <FeedItem key={i}
          title={item.title}
          description={item.description}
          date={item.date}
        />
      );
    } else {
      feedItems = <Preloader size='big'/>;
    }
    return feedItems
  }

  render() {
    return (
      <div>
        { this.getFeedItems() }
      </div>
    )
  }
}

export default Feed;
