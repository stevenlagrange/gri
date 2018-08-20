import React, { Component } from 'react';
import { Row, Input, CardPanel, Button, Col } from 'react-materialize';
import API from '../../api';
import './addevent.scss';

class AddEvent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      date: ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
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

  handleDateChange(event) {
    this.setState({date: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let form = {
      title: this.state.title,
      description: this.state.description,
      address: this.state.address,
      date: this.state.date
    };

    let test = {
      "title": "Race title",
      "description": "Description here.",
      "address": "50 Street NW",
      "start": "2018-08-06T02:45",
      "end": "2018-08-07T02:45"
    };

    API.createEvent(test)
      .then(function(response) {
        console.log(response);
    }).catch(function(response) {
        console.log(response);
    });
  }


  render() {
    return (
    <Row>
      <form onSubmit={this.handleSubmit}>
        <CardPanel>
          <Row>
            <Input s={12} label="Title" value={this.state.title} onChange={this.handleTitleChange}/>
            <Input s={12} type='textarea' label="Description" value={this.state.description} onChange={this.handleDescriptionChange}/>
            <Input s={12} label="Address" value={this.state.address} onChange={this.handleAddressChange}/>
            <Input s={12} name='on' type='date' label="Date" onChange={this.handleDateChange} />
          </Row>
          <Row>
          <Button className="add-button">Add</Button>
          </Row>
        </CardPanel>
      </form>
    </Row>
    );
  }
}



export default AddEvent;
