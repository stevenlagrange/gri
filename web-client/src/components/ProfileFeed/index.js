import './profile-feed.scss';
import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import Feed from '../Feed';
import PostView from '../PostView';

class ProfileFeed extends Feed {
  getFeedItems() {
    let feedItems;
    if (this.props.items) {
      const data = this.props.items;
      feedItems = data.map((item, i) => (
        <PostView
          key={i}
          title={item.title}
          data={item.data}
          created_date={item.created_date}
        />
      ));
    } else {
      feedItems = (
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
      );
    }
    return feedItems;
  }
}

export default ProfileFeed;
