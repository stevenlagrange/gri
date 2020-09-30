import './profile-header.scss'
import React from 'react';
import { Segment, Header, Icon, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function ProfileHeader({ username, firstName, lastName, bio, location }) {
  return (
    <div className="profile-header">
      <Header as="h2" icon textAlign="center">
        <Icon name="id card" circular />
        <Header.Content>{username}</Header.Content>
      </Header>
      <p>{bio}</p>
      <List>
        <List.Item icon="user" content={firstName + lastName} />
        <List.Item icon="marker" content={location} />
        <List.Item icon="mail" content="slagrang@ualberta.ca" />
        <List.Item icon="linkify" content={<a href="http://www.uhpfire.com">uhpfire.com</a>} />
      </List>
    </div>
  )
}

ProfileHeader.propTypes = {
  username: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

export default ProfileHeader;
