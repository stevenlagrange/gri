import './events.scss';
import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';

import AddEvent from '../../components/AddEvent';
import EventFeed from '../../components/EventFeed';
import Data from '../../_services/data';


class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Data.getAllEvents().then((response) => { this.setState({ events: response.data }); })
      .catch((err) => { this.setState({ error: err.response.status }); });
  }

  render() {
    const { events, error } = this.state;
    if (error) {
      throw new Error(error);
    }

    return (
      <div className="events">
        <Header as="h1">
          <Header.Content>Events</Header.Content>
        </Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <EventFeed items={events} />
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
