import './login-form.scss';
import React, { Component } from 'react';
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(event) {
    this.setState({username: event.target.value});
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  validateForm() {
    console.log('Validate Form here.');
    return true;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validateForm()) {
      this.props.login(this.state.username, this.state.password);
    }
  }

  render() {
    return (
      <div className='login-form'>
        <Form className='login-form-fields segment' onSubmit={this.handleSubmit.bind(this)}>
          <h2>Login</h2>
          <Form.Field>
            <input placeholder="Username" onChange={this.handleUsername}/>
          </Form.Field>
          <Form.Field>
            <input placeholder="Password" type='password' onChange={this.handlePassword}/>
          </Form.Field>
          <Button primary className="right floated" type="submit">Sign in</Button>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
