import './navigation.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Icon, Dropdown, Input } from 'semantic-ui-react';

import Authorization from '../../../_services/authorization';
import browserStorage from '../../../_utilities/browserStorage';


function handleLogout() {
  Authorization.signout();
}

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        displayName: '',
      },
    };
  }

  componentDidMount() {
    this.setState({ user: { displayName: browserStorage.getDisplayName() } });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item
              header
              as={Link}
              to="/"
              name="home"
            >
            GoRaceInfo
            </Menu.Item>

            <Menu.Item className="search">
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>

            <Menu.Menu position="right">
              <Menu.Item
                as={Link}
                to="/profile"
              >
                <Icon name="user" />
                <span>{user.displayName}</span>
              </Menu.Item>

              <Dropdown item>
                <Dropdown.Menu>
                  <Dropdown.Item
                    as={Link}
                    to="/settings"
                  >
                  Settings
                  </Dropdown.Item>
                  <Dropdown.Item
                    name="logout"
                    onClick={handleLogout}
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Menu>
        </Segment>
      </div>
    );
  }
}

export default Navigation;
