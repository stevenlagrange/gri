import './events.scss'
import React, { Component } from 'react';
import { Row, Input, CardPanel, Col } from 'react-materialize';
import AddEvent from '../../components/AddEvent'
import EventFeed from '../../components/EventFeed'
import { Button } from 'semantic-ui-react'
import API from '../../api'


class Events extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let c = this;
    API.getEvents(1).then(function(response) {
      c.setState({events : response.data});
    });
  }

  render() {
    console.log('events');
    return (
      <div className="events">
        <h1>Events</h1>
        <Button>Click me! Semantic!</Button>
        <Row>
          <Col s={8}>
            <EventFeed items={this.state.events} />
          </Col>
          <Col s={4}>
            <AddEvent />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Events;
