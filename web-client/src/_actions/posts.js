import Data from '../_services/data';


export const REQUEST_POSTS = 'REQUEST_POSTS';
export function requestPosts() {
  return {
    type: REQUEST_POSTS,
  };
}


export const RECIEVE_POSTS = 'RECIEVE_POSTS';
export function recievePosts(json) {
  return {
    type: RECIEVE_POSTS,
    posts: json,
  };
}


export const FETCH_POSTS = 'FETCH_POSTS';
export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());

    return Data
      .getPosts()
      .then((response) => {
        dispatch(recievePosts(response.data));
      });
  };
}
