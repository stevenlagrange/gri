import './login.scss';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginForm from '../../components/LoginForm';
import Authorization from '../../_services/authorization';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false,
      error: '',
    };

    this.handleLogin = this.handleLogin.bind(this);
  }


  handleLogin(username, password) {
    Authorization.login(username, password, ({ error }) => {
      if (error) {
        this.setState({ error: 'Failed to login. Try providing different credentials.' });
      } else {
        this.setState({ redirectToReferrer: true });
      }
    });
  }

  render() {
    const { location } = this.props;
    console.log(location);
    const { from } = location.state || { from: { pathname: '/' } };
    const { redirectToReferrer, error } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className="login">
        <div className="login-header" />
        <LoginForm login={this.handleLogin} />
        <p>{error}</p>
      </div>
    );
  }
}

Login.propTypes = {
  location: PropTypes.object,
};

Login.defaultProps = {
  location: { from: { pathname: '/' } },
};


export default Login;
