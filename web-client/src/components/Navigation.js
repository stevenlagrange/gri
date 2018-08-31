import React, { Component } from 'react';
import history from '../history.js'
import { Menu, Segment, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Authorization } from '../_services/authorization';

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home'
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogout() {
    Authorization.signout();
  }

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item header>GoRaceInfo</Menu.Item>
            <Menu.Item
              as={ Link }
              to=""
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={ Link }
              to="profile"
              name='profile'
              active={activeItem === 'profile'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={ Link }
              to="calendar"
              name='calendar'
              active={activeItem === 'calendar'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={ Link }
              to="events"
              name='events'
              active={activeItem === 'events'}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
              <Menu.Item
                name='logout'
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
