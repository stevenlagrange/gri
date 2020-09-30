import Data from '../_services/data';


export const REQUEST_CALENDAR = 'REQUEST_CALENDAR';
export function requestCalendar() {
  return {
    type: REQUEST_CALENDAR,
  };
}


export const RECIEVE_CALENDAR = 'RECIEVE_CALENDAR';
export function recieveCalendar(calendar) {
  return {
    type: RECIEVE_CALENDAR,
    calendar,
  };
}


export const FETCH_EVENTS = 'FETCH_EVENTS';
export function fetchEvents() {
  return (dispatch) => {
    dispatch(requestCalendar());

    return Data
      .getUserCalendar()
      .then((response) => {
        dispatch(recieveCalendar(response.data));
      });
  };
}
