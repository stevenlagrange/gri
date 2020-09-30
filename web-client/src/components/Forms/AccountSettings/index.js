import React, { Component } from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';
import Data from '../../../_services/data';

class ProfileUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'dev',
      firstName: 'John',
      lastName: 'Doe',
    };

    this.handleUpdateView = this.handleUpdateView.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (e) => {
    const { target } = e;
    const { name, type, checked, value } = target;
    const input = type === 'checkbox' ? checked : value;

    this.setState({ [name]: input });
  }

  handleUpdateView() {
    const { updateView } = this.props;
    updateView();
  }

  clearForm() {
    this.setState({ title: '' }, { post: '' });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      title,
      post,
    } = this.state;
  }


  render() {
    const {
      username,
      firstName,
      lastName,
    } = this.state;

    return (
      <Form className="account-settings" onSubmit={this.handleSubmit}>
        <Form.Field>
          Username
          <Form.Input s={12} disabled transparent name="username" value={username} onChange={this.handleInputChange} />
        </Form.Field>
        <Form.Field>
          First Name
          <Form.Input s={12} transparent name="firstName" value={firstName} onChange={this.handleInputChange} />
        </Form.Field>
        <Form.Field>
          Last Name
          <Form.Input s={12} transparent name="lastName" value={lastName} onChange={this.handleInputChange} />
        </Form.Field>
      </Form>
    );
  }
}


export default ProfileUpdate;
