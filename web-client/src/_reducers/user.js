import { SAVE_USER_INFO, GET_USER_INFO } from '../_actions/user';

const initialState = {
  user: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_INFO:
      return {
        ...state,
        user: action.user,
      };
    case GET_USER_INFO:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userReducer;
