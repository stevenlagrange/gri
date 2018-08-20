import React, { Component } from 'react';
import { CardPanel, Row, Col, Collection, CollectionItem } from 'react-materialize';
import SettingsToggle from './SettingsToggle'
import SettingsMenu from '../../components/SettingsMenu'


class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
        <h2>Settings</h2>
        <Row>
          <Col s={4}>
            <SettingsMenu />
          </Col>
          <Col s={8}>
            <CardPanel>
              <Row><SettingsToggle label={"Settings label here."}/></Row>
              <Row><SettingsToggle label={"Some other setting here."}/></Row>
              <Row><SettingsToggle label={"What settings do we need?"}/></Row>
            </CardPanel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Settings;
