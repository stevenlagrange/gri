import React, { Component } from 'react';
import { Menu, Segment, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Authorization from '../_services/authorization';
import browserStorage from '../_utilities/browserStorage';


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
      user: {
        displayName: ''
      },
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.setState({ user: { displayName: browserStorage.getDisplayName() } });
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogout() {
    this.setState({ activeItem: 'logout' });
    Authorization.signout();
  }

  render() {
    const { activeItem, user } = this.state;
    return (
      <div>
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item header>GoRaceInfo</Menu.Item>
            <Menu.Item
              as={Link}
              to="/"
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              as={Link}
              to="/calendar"
              name="calendar"
              active={activeItem === 'calendar'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to="/events"
              name="events"
              active={activeItem === 'events'}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position="right">
              <Menu.Item
                as={Link}
                to="/profile"
                active={activeItem === 'profile'}
                onClick={this.handleItemClick}
              >
                <Icon name="user" />
                <span>{user.displayName}</span>
              </Menu.Item>
              <Menu.Item
                name="logout"
                active={activeItem === 'logout'}
                onClick={this.handleLogout}
              />
            </Menu.Menu>
          </Menu>
        </Segment>
      </div>
    );
  }
}

export default Navigation;
