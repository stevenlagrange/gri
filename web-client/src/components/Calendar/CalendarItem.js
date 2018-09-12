import './calendar.scss';
import React, { Component } from 'react';
import { Item, Button, Modal, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import dateFormatter from '../../_utilities/dateFormatter';

class CalendarItem extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });


  render() {
    const { modalOpen } = this.state;
    const { start, title, description } = this.props;
    return (
      <Item>
        <Item.Content onClick={this.handleOpen}>
          <Item.Header>{title}</Item.Header>
          <Item.Meta>{dateFormatter.formatDate(start)}</Item.Meta>
          <Item.Description>{description}</Item.Description>
        </Item.Content>

        <Modal closeIcon open={modalOpen} onClose={this.handleClose}>
          <Modal.Header>{title}</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              {description}
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="red" onClick={this.handleClose} inverted>
              <Icon name="trash" />
              Remove
            </Button>
          </Modal.Actions>
        </Modal>
      </Item>
    );
  }
}

CalendarItem.propTypes = {
  start: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CalendarItem;
