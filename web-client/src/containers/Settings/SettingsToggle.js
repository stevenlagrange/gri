import React, { Component } from 'react';
import { Input } from 'react-materialize';


class SettingsToggle extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Input type='checkbox' value='on' label={ this.props.label } />
    );
  }
}

export default SettingsToggle;
