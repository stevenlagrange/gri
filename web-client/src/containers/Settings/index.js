import './settings.scss';
import React, { Component } from 'react';
import AccountSettings from '../../components/Forms/AccountSettings';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className="settings">
        <h2>Settings</h2>
        <AccountSettings />
      </div>
    );
  }
}


export default Settings;
