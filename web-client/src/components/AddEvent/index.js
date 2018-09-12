import './add-event.scss';
import React, { Component } from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';
import Data from '../../_services/data';
import Validator from './validator';
import 'react-datepicker/dist/react-datepicker.css';

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      address: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',

      errors: {
        titleError: '',
        descriptionError: '',
        submitError: '',
      },
    };
  }

  handleInputChange = (e) => {
    const { target } = e;
    const { name, type, checked, value } = target;
    const input = type === 'checkbox' ? checked : value;

    this.setState({ [name]: input });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      title,
      description,
      address,
      startDate,
      startTime,
      endDate,
      endTime,
    } = this.state;

    const form = {
      title,
      description,
      address,
      start: startDate + startTime,
      end: endDate + endTime,
    };

    console.log(form);

    const validator = Validator.validateForm(form);

    if (validator.valid) {
      Data.createEvent(form)
        .then(() => {
          this.clearForm();
        }).catch(() => {
          this.setState({ errors: { submitError: '* Failed to create event.' } });
        });
    } else {
      this.setState({ errors: validator.errors });
    }
  }

  clearForm() {
    this.setState({});
  }

  render() {
    const {
      title,
      description,
      address,
      startDate,
      startTime,
      endDate,
      endTime,
      errors,
    } = this.state;

    return (
      <Segment>
        <Form className="event-form" onSubmit={this.handleSubmit}>
          <Form.Field>
            <Form.Input name="title" placeholder="Title" value={title} onChange={this.handleInputChange} />
            {errors.titleError}
          </Form.Field>
          <Form.Field>
            <Form.Input name="description" placeholder="Desription" value={description} onChange={this.handleInputChange} />
            {errors.descriptionError}
          </Form.Field>
          <Form.Field>
            <Form.Input name="address" placeholder="Address" value={address} onChange={this.handleInputChange} />
          </Form.Field>
          <Form.Field>
            <Form.Input name="startDate" placeholder="Start" value={startDate} type="date" onChange={this.handleInputChange} />
            <Form.Input name="startTime" placeholder="Time" value={startTime} type="time" onChange={this.handleInputChange} />
          </Form.Field>
          <Form.Field>
            <Form.Input name="endDate" placeholder="End" value={endDate} type="date" onChange={this.handleInputChange} />
            <Form.Input name="endTime" placeholder="Time" value={endTime} type="time" onChange={this.handleInputChange} />
          </Form.Field>
          <Button primary className="right floated" type="submit">Add</Button>
        </Form>
        {errors.submitError}
      </Segment>
    );
  }
}

export default AddEvent;
