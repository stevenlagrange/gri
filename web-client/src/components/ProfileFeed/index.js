import './profile-feed.scss';
import React from 'react';
import { Dimmer, Loader, Item } from 'semantic-ui-react';
import Feed from '../Feed';
import PostView from '../PostView';

class ProfileFeed extends Feed {
  getFeedItems(items) {
    let feedItems;
    let feed;
    if (items) {
      console.log(items);
      feedItems = items.map((item) => (
        <PostView
          key={item.pid}
          id={item.pid}
          title={item.title}
          created_date={item.created_date}
          author={item.author.username}
          description={item.description}
        />
      ));

      return (
        <Item.Group>
          {feedItems}
        </Item.Group>
      )
    } else {
      return (
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
      );
    }
  }
}

export default ProfileFeed;
