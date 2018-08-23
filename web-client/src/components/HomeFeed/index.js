import React, { Component } from 'react';
import { Preloader } from 'react-materialize';
import API from '../../api';
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
      feedItems = <Preloader size='big'/>;
    }
    return feedItems
  }
};

HomeFeed.propTypes = {
  items: PropTypes.array
};

export default HomeFeed;
