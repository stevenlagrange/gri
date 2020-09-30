import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import dateFormatter from '../../_utilities/dateFormatter';
import history from '../../history';
import EventAction from '../EventAction';


class EventItem extends Component {
  handleItemClick = (e) => {
    this.setState(history.push(`/events/${e.target.name}`));
  }


  render() {
    const { start, title, description, id } = this.props;
    const startDate = dateFormatter.formatDate(start);

    return (
      <Item>
        <Item.Content>
          <EventAction />
          <Item.Header as="a" name={id} onClick={this.handleItemClick}>{title}</Item.Header>
          <Item.Meta>{startDate}</Item.Meta>
          <Item.Description>
            {description}
          </Item.Description>
        </Item.Content>
      </Item>
    );
  }
}


EventItem.propTypes = {
  start: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default EventItem;
