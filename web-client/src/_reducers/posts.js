import { RECIEVE_POSTS, REQUEST_POSTS } from '../_actions/posts';

const initialState = {
  isFetching: false,
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIEVE_POSTS:
      return {
        ...state,
        isFetching: false,
        posts: action.posts,
      };
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
      };
    default:
      return state;
  }
};

export default postReducer;
