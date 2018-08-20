import React, { Component } from 'react';
import { CardPanel, Icon } from 'react-materialize';
import DateUtil from '../../util/DateUtil'

class ProfileFeedItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CardPanel className="lighten-4 black-text">
          <h4>{ this.props.title }</h4>
          <p>{ this.props.data }</p>
          <p>{ this.props.created_data }</p>
          <Icon>clear</Icon>
          <Icon>edit</Icon>
        </CardPanel>
      </div>
    );
  }
}

export default ProfileFeedItem;
