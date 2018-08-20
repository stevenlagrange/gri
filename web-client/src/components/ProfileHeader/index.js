import React, { Component } from 'react';
import { Preloader, CardPanel } from 'react-materialize';
import './profile-header.scss'

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="profile-header">
      <CardPanel>
        <p>Profile image here</p>
        <h4>{ this.props.name }</h4>
        <p>{ this.props.bio }</p>
      </CardPanel>
      </div>
    )
  }
}

export default ProfileHeader;
