import Data from '../_services/data';


export const REQUEST_EVENTS = 'REQUEST_EVENTS';
export function requestEvents() {
  return {
    type: REQUEST_EVENTS,
  };
}


export const RECIEVE_EVENTS = 'RECIEVE_EVENTS';
export function recieveEvents(json) {
  return {
    type: RECIEVE_EVENTS,
    events: json,
  };
}


export const FETCH_EVENTS = 'FETCH_EVENTS';
export function fetchEvents() {
  return (dispatch) => {
    dispatch(requestEvents());

    return Data
      .getAllEvents()
      .then((response) => {
        dispatch(recieveEvents(response.data));
      });
  };
}
