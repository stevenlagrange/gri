import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Data from '../../_services/data';

class EventAction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: {
        hasError: false,
        status: '',
      },
    };
  }


  render() {
    const { error } = this.state;
    if (error.hasError) {
      throw new Error(error.status);
    }

    return (
      <Button icon floated="right">
        <Icon name="world" />
      </Button>
    );
  }
}

EventAction.propTypes = {
  match: PropTypes.object.isRequired,
};

export default EventAction;
