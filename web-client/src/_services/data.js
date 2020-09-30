import API from '../_api';
import browserStorage from '../_utilities/browserStorage';

function getAllEvents() {
  // Retrieve ALL 'events'.
  return API.events({ method: 'get', token: browserStorage.getToken() });
}

function getEventById(id) {
  // Retrieve 'event' by id.
  const resource = {
    method: 'get',
    token: browserStorage.getToken(),
    detail: id,
  };
  return API.events(resource);
}

function createEvent(form) {
  // Create 'event' from payload.
  const resource = {
    method: 'post',
    token: browserStorage.getToken(),
    data: form,
  };
  return API.events(resource);
}

function createPost(form) {
  // Create 'post' from form.
  const resource = {
    method: 'post',
    token: browserStorage.getToken(),
    data: form,
  };
  return API.posts(resource);
}

function getUserCalendar() {
  // Return `user` calendar.
  const resource = {
    method: 'get',
    token: browserStorage.getToken(),
    detail: `${browserStorage.getUserId()}/`,
  };
  return API.calendars(resource);
}

function getProfileDetails() {
  // Retrieve user details using the API
  const resource = {
    method: 'get',
    token: browserStorage.getToken(),
    detail: `${browserStorage.getUserId()}/`,
  };
  return API.profiles(resource);
}

function getPosts() {
  // Get all posts for user profile 'id'.
  const resource = {
    method: 'get',
    token: browserStorage.getToken(),
    detail: `${browserStorage.getUserId()}/`,
  };
  return API.posts(resource);
}

function getPostById(id) {
  // Get `post` by `id`.
  const resource = {
    method: 'get',
    token: browserStorage.getToken(),
    detail: `${browserStorage.getUserId()}/${id}`,
  };
  return API.posts(resource);
}

export default {
  getAllEvents,
  getEventById,
  createEvent,
  createPost,
  getUserCalendar,
  getProfileDetails,
  getPosts,
  getPostById,
};
