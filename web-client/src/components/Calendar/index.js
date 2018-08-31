import React, { Component } from 'react';
import { Dimmer, Loader, Segment, Grid } from 'semantic-ui-react';
import { Data } from '../../_services/data';
import CalendarItem from './CalendarItem';
import DateHeader from './DateHeader';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date()
    };
  }

  componentDidMount() {
    let c = this;
    Data.getUserCalendar().then(function(response) {
      console.log(response.data);
      c.setState({events : response.data.events});
    });
  }

  getCalendarItemsBasic() {
    let calendarItems;
    if(this.state.events) {
      const data = this.state.events;
      calendarItems = data.map((event, i) =>
        <CalendarItem key={i}
          title={event.title}
          description={event.description}
          start={event.start}
        />
      );
    } else {
      calendarItems = <Dimmer active>
        <Loader content='Loading' />
      </Dimmer>;
    }
    return calendarItems;
  }

  getCalendarItemsTrifle() {
    let calendarItems2 = [];
    /*
    if(this.state.events) {
      let events = this.state.events;
      let lastHeader = this.state.today;
      for(let i=0; i<events.length; i++) {
        console.log(events[i]);
        currentEvent = events[i];
        if(lastHeader!=currentEvent.date) {
          <p>Header</p>
          <CalendarItem key={i}
            title={currentEvent.title}
            description={currentEvent.description}
            date={currentEvent.date}
          />
        }
      }
    } else {
      calendarItems2 = <Preloader size='big'/>;
    }
    */
    return calendarItems2;
  }

  render() {
    return (
      <div>
        <h1>Calendar</h1>
        <Grid>
          <Grid.Column width={8}>
            { this.getCalendarItemsBasic() }
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Calendar;
