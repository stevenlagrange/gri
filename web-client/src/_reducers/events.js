import { RECIEVE_EVENTS, REQUEST_EVENTS } from '../_actions/events';

const initialState = {
  isFetching: false,
  events: [],
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIEVE_EVENTS:
      return {
        ...state,
        isFetching: false,
        events: action.events,
      };
    case REQUEST_EVENTS:
      return {
        ...state,
        isFetching: true,
      };
    default:
      return state;
  }
};

export default eventReducer;
