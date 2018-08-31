import React, { Component } from 'react';
import { Preloader, CardPanel } from 'react-materialize';
import { Segment } from 'semantic-ui-react';
import './profile-header.scss'

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="profile-header">
        <Segment>
          <h4>{ this.props.firstName } { this.props.lastName }</h4>
          <p>{ this.props.username }</p>
          <p>{ this.props.bio }</p>
          <p>{ this.props.location }</p>
        </Segment>
      </div>
    )
  }
}

export default ProfileHeader;
