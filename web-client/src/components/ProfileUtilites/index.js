import './profile-utilities.scss';
import React from 'react';
import { Segment, Icon, List, Image } from 'semantic-ui-react';

function ProfileUtilites() {
  return (
    <div className="profile-utilities">
      <List animated verticalAlign="middle">
        <List.Item>
          <Icon name="add" />
          <List.Content>
            <List.Header>Create Post</List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <Icon name="edit" />
          <List.Content>
            <List.Header>Update Profile</List.Header>
          </List.Content>
        </List.Item>
      </List>
    </div>
  );
}

export default ProfileUtilites;
