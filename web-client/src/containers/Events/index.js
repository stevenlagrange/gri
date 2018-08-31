import './events.scss';
import React, { Component } from 'react';
import { Row, Input, CardPanel, Col } from 'react-materialize';
import { Grid } from 'semantic-ui-react';

import AddEvent from '../../components/AddEvent';
import EventFeed from '../../components/EventFeed';
import { Data } from '../../_services/data';


class Events extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let c = this;

    Data.getAllEvents().then(function(response) {
      c.setState({events : response.data});
    })
  }

  render() {
    return (
      <div className="events">
        <Grid>
          <Grid.Row>
            <h1>Events</h1>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <EventFeed items={this.state.events} />
            </Grid.Column>
            <Grid.Column width={8}>
              <AddEvent />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Events;
