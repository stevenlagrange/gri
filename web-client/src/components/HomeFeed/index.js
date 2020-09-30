import './home-feed.scss';
import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Feed from '../Feed';
import HomeFeedItem from '../HomeFeedItem';

class HomeFeed extends Feed {
  getFeedItems(items) {
    let feedItems;
    if (items) {
      feedItems = items.map((item, i) => (
        <HomeFeedItem
          key={i}
          title={item.title}
          description={item.description}
          date={item.date}
        />
      )
      );
    } else {
      feedItems = (
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
      );
    }
    return feedItems
  }
}

HomeFeed.propTypes = {
  items: PropTypes.array
};

export default HomeFeed;
