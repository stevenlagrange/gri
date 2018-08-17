import axios from 'axios';

const API = {

  getEvents(pk) {
    return axios.get('http://localhost:8000/events/');
  },

  createEvent(event) {
    return axios.post('http://localhost:8000/events/', event);
  },


  getPosts(user) {
    return axios.get('http://localhost:8000/posts/');
  },

  createPost(post) {
    console.log(post);
    return axios.post('http://localhost:8000/posts/', post);
  },


  getCalendars(user) {
    return axios.get('http://localhost:8000/calendars/');
  }

}

export default API;
