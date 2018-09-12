import './splash.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import App from '../../App';
import Authorization from '../../_services/authorization';


class Splash extends Component {
  state = {
    redirectToReferrer: false,
  };

  handleLogin(username, password) {
    Authorization.login(username, password, () => {
      this.setState({ redirectToReferrer: true });
    });
  }

  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <App />;
    }

    return (
      <div className="splash">
        <Menu borderless inverted>
          <Menu.Item header>
            <h1>GoRaceInfo</h1>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as={Link} to="login" name="Sign In" />
            <Menu.Item as={Link} to="register" name="Register" />
          </Menu.Menu>
        </Menu>
        <Container>
          <h1>Welcome to GoRaceInfo.com!</h1>
        </Container>
      </div>
    );
  }
}


export default Splash;
