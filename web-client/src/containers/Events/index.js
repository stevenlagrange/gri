import './events.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Header } from 'semantic-ui-react';
import { fetchEvents } from '../../_actions/events';

import AddEvent from '../../components/Forms/AddEvent';
import EventFeed from '../../components/EventFeed';


class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEvents());
  }

  render() {
    const { error } = this.state;
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
              <EventFeed />
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

export default connect()(Events);
