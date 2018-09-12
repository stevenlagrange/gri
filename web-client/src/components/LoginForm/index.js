import './login-form.scss';
import React, { Component } from 'react';
import {
  Button,
  Form,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Validator from './validator';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {
        usernameError: '',
        passwordError: '',
      },
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(event) {
    this.setState({ username: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      username,
      password,
    } = this.state;

    const { login } = this.props;

    const validatorResponse = Validator.validateForm(username, password);

    if (validatorResponse.valid) {
      this.setState({ errors: {} });
      login(username, password);
    } else {
      this.setState({ errors: validatorResponse.errors });
    }
  }

  render() {
    const {
      username,
      password,
      errors: {
        usernameError,
        passwordError,
      },
    } = this.state;
    return (
      <div className="login-form">
        <Form className="login-form-fields segment" onSubmit={this.handleSubmit}>
          <h2>Login</h2>
          <Form.Field>
            <input placeholder="Username" value={username} onChange={this.handleUsername} />
            {usernameError}
          </Form.Field>
          <Form.Field>
            <input placeholder="Password" type="password" value={password} onChange={this.handlePassword} />
            {passwordError}
          </Form.Field>
          <Button primary className="right floated" type="submit">Sign in</Button>
        </Form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginForm;
