import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

class HomeMenu extends Component {
  handleItemClick = name => this.setState({ activeItem: name })

  render() {
    return (
      <Menu vertical>

        <Menu.Item>
          <Menu.Header
            as={Link}
            to="/events"
            name="events"
          >
          Events
          </Menu.Header>
          <Menu.Menu>
            <Menu.Item>
              <p>Upcoming</p>
            </Menu.Item>
            <Menu.Item>
              <p>Near Me</p>
            </Menu.Item>
            <Menu.Item>
              <p>Create Event</p>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header
            as={Link}
            to="/posts"
            name="posts"
          >
          Posts
          </Menu.Header>
          <Menu.Menu>
            <Menu.Item>
              <p>Explore</p>
            </Menu.Item>
            <Menu.Item>
              <p>Latest</p>
            </Menu.Item>
            <Menu.Item>
              <p>Create Post</p>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    );
  }
}

export default HomeMenu;
