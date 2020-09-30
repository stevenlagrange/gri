import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import eventsReducer from '../_reducers/events';
import postsReducer from '../_reducers/posts';
import calendarReducer from '../_reducers/calendar';
import userReducer from '../_reducers/user';


const rootReducer = combineReducers({
  eventsReducer,
  postsReducer,
  calendarReducer,
  userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
