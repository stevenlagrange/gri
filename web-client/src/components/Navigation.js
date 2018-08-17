import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

class Navigation extends Component {
  render() {
    return (
      <Navbar brand='GoRaceInfo' right>
        <NavItem href='#'><Icon>add</Icon></NavItem>
        <NavItem href='#'><Icon>event</Icon></NavItem>
      </Navbar>
    );
  }
}


export default Navigation;
