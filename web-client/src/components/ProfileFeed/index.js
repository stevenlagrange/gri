import React, { Component } from 'react';
import { Preloader } from 'react-materialize';
import API from '../../api';
import Feed from '../Feed'
import ProfileFeedItem from './ProfileFeedItem'

class ProfileFeed extends Feed {
  constructor(props) {
    super(props);
  }

  getFeedItems() {
    let feedItems;
    if(this.props.items) {
      const data = this.props.items;
      feedItems = data.map((item, i) =>
        <ProfileFeedItem key={i}
          title={item.title}
          data={item.data}
          created_date={item.created_date}
        />
      );
    } else {
      feedItems = <Preloader size='big'/>;
    }
    return feedItems
  }
}

export default ProfileFeed;
