import './login.scss';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from '../../components/LoginForm'
import { Authorization } from '../../_services/authorization'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false
    }
  }


  handleLogin(username, password) {
    let c = this;
    Authorization.login(username, password, function() {
      c.setState({ redirectToReferrer: true });
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      console.log('redirect');
      return <Redirect to={from} />;
    }

    return (
      <div className="login">
        <div className="login-header">
        </div>
        <LoginForm login={this.handleLogin.bind(this)}/>
      </div>
    );
  }
}


export default Login;
