import React, { Component } from 'react';
import { Preloader, CardPanel } from 'react-materialize';
import API from '../../api';
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
    API.getCalendars(1).then(function(response) {
      c.setState({events : response.data[0].events});
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
      calendarItems = <Preloader size='big'/>;
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
        { this.getCalendarItemsBasic() }
      </div>
    )
  }
}

export default Calendar;
