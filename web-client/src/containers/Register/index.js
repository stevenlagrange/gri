import './register.scss';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm'
import Authorization from '../../_services/authorization'

class Register extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log('Handler Submit.')
  }

  render() {
    return (
      <div className="register">
        <div className="register-header">
        </div>
        <RegisterForm submit={this.handleSubmit} />
      </div>
    );
  }
}


export default Register;
