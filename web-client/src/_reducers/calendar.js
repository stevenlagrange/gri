import { RECIEVE_CALENDAR, REQUEST_CALENDAR } from '../_actions/calendar';

const initialState = {
  isFetching: false,
  calendar: [],
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIEVE_CALENDAR:
      return {
        ...state,
        isFetching: false,
        calendar: action.calendar,
      };
    case REQUEST_CALENDAR:
      return {
        ...state,
        isFetching: true,
      };
    default:
      return state;
  }
};

export default calendarReducer;
