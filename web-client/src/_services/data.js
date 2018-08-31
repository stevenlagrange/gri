import API from '../_api';
import { browserStorage } from '../_utilities/browserStorage';

export const Data = {
  getAllEvents,
  createEvent,
  createPost,
  getUserCalendar,
  getProfileDetails,
  getPosts
}


function getAllEvents() {
  // Retrieve ALL 'events'.
  return API.events({method : 'get', token : browserStorage.getToken()});
}

function createEvent(form) {
  // Create 'event' from payload.
  let resource = {
    method : 'post',
    token : browserStorage.getToken(),
    data : form
  }
  return API.events({});
}

function createPost(form) {
  // Create 'post' from form.
  let resource = {
    method : 'post',
    token : browserStorage.getToken(),
    data : form
  }
  return API.posts(resource);
}

function getUserCalendar() {
  // Return `user` calendar.
  let resource = {
    method : 'get',
    token : browserStorage.getToken(),
    detail : browserStorage.getUserInfo() + '/'
  };
  return API.calendars(resource);
}

function getProfileDetails() {
  // Retrieve user details using the API
  let data = {};
  let resource = {
    method : 'get',
    token : browserStorage.getToken(),
    detail : browserStorage.getUserInfo() + '/'
  }
  return API.profiles(resource);
}

function getPosts() {
  // Get all posts for user profile 'id'.
  let resource = {
    method : 'get',
    token : browserStorage.getToken(),
    detail : browserStorage.getUserInfo() + '/'
  };
  return API.posts(resource);
}
