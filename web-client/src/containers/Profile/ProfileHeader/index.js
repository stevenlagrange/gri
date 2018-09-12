import React, { Component } from 'react';
import { Segment, Header, Icon, List } from 'semantic-ui-react';
import './profile-header.scss'

function ProfileHeader({ username, firstName, lastName, bio, location}) {
  return (
    <div className="profile-header">
      <Segment textAlign="center">
        <Header as="h2" icon textAlign="center">
          <Icon name="user" circular />
          <Header.Content>{username}</Header.Content>
        </Header>
        <p>{bio}</p>
        <List>
          <List.Item icon="users" content="Semantic UI" />
          <List.Item icon="marker" content={location} />
          <List.Item icon="mail" content="slagrang@ualberta.ca" />
          <List.Item icon="linkify" content={<a href='http://www.uhpfire.com'>uhpfire.com</a>} />
        </List>
      </Segment>
    </div>
  )
}

export default ProfileHeader;
