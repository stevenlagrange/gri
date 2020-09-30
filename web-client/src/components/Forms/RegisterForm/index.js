import './register-form.scss';
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Validator from './validator';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errors: {
        usernameError: '',
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        passwordError: '',
      },
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleFirstName(event) {
    this.setState({ firstName: event.target.value });
  }

  handleLastName(event) {
    this.setState({ lastName: event.target.value });
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }


  handleSubmit(event) {
    event.preventDefault();
    const { submit } = this.props;
    const {
      username,
      firstName,
      lastName,
      email,
      password,
    } = this.state;

    const form = {
      username,
      firstName,
      lastName,
      email,
      password,
    };

    const validator = Validator.validateForm(form);

    if (validator.valid) {
      submit();
    } else {
      this.setState({ errors: validator.errors });
    }
  }

  render() {
    const {
      username,
      firstName,
      lastName,
      email,
      password,
      errors,
    } = this.state;

    return (
      <div className="register-form">
        <Form className="register-form-fields segment" onSubmit={this.handleSubmit}>
          <h2>Register </h2>
          <Form.Field>
            <Form.Input placeholder="Username" value={username} onChange={this.handleUsername} />
            {errors.usernameError}
          </Form.Field>
          <Form.Field>
            <Form.Input placeholder="First Name" value={firstName} onChange={this.handleFirstName} />
            {errors.firstNameError}
          </Form.Field>
          <Form.Field>
            <Form.Input placeholder="Last Name" value={lastName} onChange={this.handleLastName} />
            {errors.lastNameError}
          </Form.Field>
          <Form.Field>
            <Form.Input placeholder="Email" value={email} onChange={this.handleEmail} />
            {errors.emailError}
          </Form.Field>
          <Form.Field>
            <Form.Input placeholder="Password" type="password" value={password} onChange={this.handlePassword} />
            {errors.passwordError}
          </Form.Field>
          <Button primary className="right floated" type="submit">Register</Button>
        </Form>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default RegisterForm;
