import './home-feed.scss';
import React, { Component } from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import Feed from '../Feed';
import HomeFeedItem from './HomeFeedItem';
import PropTypes from 'prop-types';

class HomeFeed extends Feed {
  constructor(props) {
    super(props);
  }

  getFeedItems() {
    let feedItems;
    if(this.props.items) {
      const data = this.props.items;
      feedItems = data.map((item, i) =>
        <HomeFeedItem key={i}
          title={item.title}
          description={item.description}
          date={item.date}
        />
      );
    } else {
      feedItems = <Dimmer active>
        <Loader content='Loading' />
      </Dimmer>
    }
    return feedItems
  }
};

HomeFeed.propTypes = {
  items: PropTypes.array
};

export default HomeFeed;
