import './splash.scss';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import { Authorization } from '../../_services/authorization';
import App from '../../App';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';
import { Parallax } from 'react-scroll-parallax';
import { Button, Container, Menu } from 'semantic-ui-react';
import logo from '../../images/logo.png';



class Splash extends Component {

  state = {
    redirectToReferrer: false
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
            <Menu.Item as={ Link }  to="login"  name='Sign In'/>
            <Menu.Item as={ Link }  to="register"  name='Register'/>
          </Menu.Menu>
        </Menu>
        <Container>
          <h1>Welcome to GoRaceInfo.com!</h1>
        </Container>
      </div>
    );
  }
}


export default Splash
