import React, { Component } from 'react';
import { Segment, Grid, Header, Icon, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Data from '../../_services/data';

class EventDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: {},
      error: {
        hasError: false,
        status: '',
      },
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    Data.getEventById(id)
      .then(response => this.setState({ event: response.data }))
      .catch(err => this.setState({ error: { hasError: true, status: err.response.status } }));
  }

  render() {
    const { event, error } = this.state;
    console.log(event);
    if (error.hasError) {
      throw new Error(error.status);
    }

    return (
      <div className="event-detail">
        <Grid>
          <Grid.Column width={12}>
            <Segment textAlign="center">
              <Header as="h2" icon textAlign="center">
                <Icon name="picture" circular />
                <Header.Content>{event.title}</Header.Content>
              </Header>
              <p>{event.description}</p>
              <Button.Group>
                <Button>Edit</Button>
              </Button.Group>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment>
              <p>Map here.</p>
              <p>Country: {event.address}</p>
              <p>City: {event.address}</p>
              <p>Address: {event.address}</p>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

EventDetail.propTypes = {
  match: PropTypes.object.isRequired,
};

export default EventDetail;
