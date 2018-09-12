import './calendar.scss';
import React, { Component } from 'react';
import {
  Dimmer,
  Loader,
  Icon,
  Item,
  Header,
} from 'semantic-ui-react';
import Data from '../../_services/data';
import EventItem from '../EventItem';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
    };
  }

  componentDidMount() {
    Data.getUserCalendar().then((response) => {
      this.setState({ events: response.data.events });
    });
  }

  getCalendarItemsBasic() {
    let calendarItems;
    const {
      events,
    } = this.state;

    if (events) {
      calendarItems = events.map(event => (<EventItem
        key={event.eid}
        id={event.eid}
        title={event.title}
        description={event.description}
        start={event.start}
      />
      ));
    } else {
      calendarItems = (
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
      );
    }
    return calendarItems;
  }

  render() {
    const { today } = this.state;
    return (
      <div className="calendar">
        <Item.Group>
          <Header as="h3">
            <Icon name="calendar" />
            {today.toDateString()}
          </Header>
          { this.getCalendarItemsBasic() }
        </Item.Group>
      </div>
    );
  }
}

export default Calendar;
