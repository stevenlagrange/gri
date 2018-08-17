import React, { Component } from 'react';
import { Button, SideNav, SideNavItem, Icon } from 'react-materialize';

class SideNavigation extends Component {
  render() {
    return (
      <SideNav
        trigger={<Button><Icon left>menu</Icon></Button>}
        options={{ closeOnClick: true }}
        >
        <SideNavItem userView
          user={{
            name: 'Steven Lagrange',
            email: 'slagrang@gmail.com'
          }}
        />
        <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
        <SideNavItem href='#!second'>Second Link</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Subheader</SideNavItem>
        <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
      </SideNav>
    );
  }
}



export default SideNavigation;
