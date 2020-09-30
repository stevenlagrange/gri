import React, { Component } from 'react';
import { Preloader, CardPanel, Collection, CollectionItem } from 'react-materialize';
import { List } from 'semantic-ui-react';

class SettingsMenu extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="settings-menu">
        <List link>
          <List.Item active>General</List.Item>
          <List.Item as='a'>Profile</List.Item>
          <List.Item as='a'>Support</List.Item>
        </List>
      </div>
    )
  }
}

export default SettingsMenu;
