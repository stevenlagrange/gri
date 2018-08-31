import './register-form.scss';
import React, { Component } from 'react';
import { CardPanel, Row, Input, Icon} from 'react-materialize';
import { Segment, Form, Button } from 'semantic-ui-react';

class RegisterForm extends Component {
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
      this.props.submit();
    }
  }

  render() {
    return (
      <div className='register-form'>
        <Form className='register-form-fields segment' onSubmit={this.handleSubmit.bind(this)}>
          <h2>Register</h2>
          <Form.Field>
            <Form.Input placeholder="First Name" onChange={this.handleUsername}/>
          </Form.Field>
          <Form.Field>
            <Form.Input placeholder="Last Name"/>
          </Form.Field>
          <Form.Field>
            <Form.Input placeholder="Email"/>
          </Form.Field>
          <Form.Field>
            <Form.Input placeholder="Password" type='password' onChange={this.handlePassword}/>
          </Form.Field>
          <Button primary className="right floated" type="submit">Register</Button>
        </Form>
      </div>
    );
  }
}

export default RegisterForm;
