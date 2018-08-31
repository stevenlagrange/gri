import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

class ErrorModal extends Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <Modal open={ true } basic size='small'>
        <Header icon='flag' content={this.props.title} />
        <Modal.Content>
          <p>
            { this.props.message }
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button inverted>
            <Icon name='checkmark' /> Okay
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}


export default ErrorModal;
