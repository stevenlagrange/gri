import React, { Component } from 'react';
import {
  Button,
  Header,
  Icon,
  Modal,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';


class ErrorModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      title,
      message,
    } = this.props;
    return (
      <Modal open={true} basic size="small">
        <Header icon="flag" content={title} />
        <Modal.Content>
          <p>
            {message}
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button inverted>
            <Icon name="checkmark" />
            Okay
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}


ErrorModal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ErrorModal;
