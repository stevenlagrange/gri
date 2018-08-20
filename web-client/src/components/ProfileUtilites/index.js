import React, { Component } from 'react';
import { Preloader, CardPanel, Collection, CollectionItem } from 'react-materialize';


class ProfileUtilites extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="profile-utilities">
        <Collection>
          <CollectionItem href="#!">
            Create Post
          </CollectionItem>
          <CollectionItem href="#!">
            Update Profile
          </CollectionItem>
        </Collection>
      </div>
    )
  }
}

export default ProfileUtilites;
