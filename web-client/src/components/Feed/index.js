import React, { Component } from 'react';
import { Preloader } from 'react-materialize';
import FeedItem from '../FeedItem';

class Feed extends Component {
  constructor(props) {
    super(props);
  }

  getFeedItems(items) {
    let feedItems;
    if (items) {
      feedItems = items.map((item, i) =>
        <FeedItem
          key={i}
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
    const { items } = this.props;
    return (
      <div>
        { this.getFeedItems(items) }
      </div>
    )
  }
}

export default Feed;
