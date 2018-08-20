import React, { Component } from 'react';
import { Preloader, CardPanel, Collection, CollectionItem } from 'react-materialize';


class SettingsMenu extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="settings-menu">
        <Collection>
          <CollectionItem href="#!">
            General
          </CollectionItem>
          <CollectionItem href="#!">
            Support
          </CollectionItem>
        </Collection>
      </div>
    )
  }
}

export default SettingsMenu;
