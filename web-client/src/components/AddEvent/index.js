import './add-event.scss';
import React, { Component } from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';
import { Data } from '../../_services/data';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


class AddEvent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      address: '',
      startDate: '',
      startTime: 'T02:45',
      endDate: '',
      endTime: 'T03:45'
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  handleAddressChange(event) {
    this.setState({address: event.target.value});
  }

  handleStartDateChange(event) {
    this.setState({startDate: event.target.value});
  }

  handleStartTimeChange(event) {
    this.setState({startTime: event.target.value});
  }

  handleEndDateChange(event) {
    this.setState({endDate: event.target.value});
  }

  handleEndTimeChange(event) {
    this.setState({endTime: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let form = {
      title: this.state.title,
      description: this.state.description,
      address: this.state.address,
      start: this.state.startDate + this.state.startTime,
      end: this.state.endDate + this.state.endTime
    };
    console.log(form);

    let test = {
      "title": "Race title",
      "description": "Description here.",
      "address": "50 Street NW",
      "start": "2018-08-06T02:45",
      "end": "2018-08-07T02:45"
    };

    Data.createEvent(form)
      .then(function(response) {
        console.log(response);
    }).catch(function(response) {
        console.log(response);
    });
  }


  render() {
    return (
      <Segment>
        <Form className='event-form' onSubmit={this.handleSubmit}>
          <Form.Field>
            <Form.Input placeholder="Title" value={this.state.title} onChange={this.handleTitleChange}/>
          </Form.Field>
          <Form.Field>
            <Form.Input placeholder="Desription" value={this.state.description} onChange={this.handleDescriptionChange}/>
          </Form.Field>
          <Form.Field>
            <Form.Input placeholder="Address" value={this.state.address} onChange={this.handleAddressChange}/>
          </Form.Field>
          <Form.Field>
            <Form.Input placeholder="Start" type='date' onChange={this.handleStartDateChange}/>
          </Form.Field>
          <Form.Field>
            <Form.Input placeholder="End" type='date' onChange={this.handleEndDateChange}/>
            <DatePicker onChange={this.handleEndDateChange}/>
          </Form.Field>
          <Button primary className="right floated" type="submit">Add</Button>
        </Form>
      </Segment>
    );
  }
}



export default AddEvent;
