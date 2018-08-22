import axios from 'axios';
var config = require('./configuration.json');

var api;
if (config.active == "production") {
  api = config.production.url + config.production.version;
} else {
  api = config.development.url + config.development.version;
}

const GoRaceInfoAPI = {

  getEvents(pk) {
    const endpoint = api + '/events/';
    return axios.get(endpoint);
  },

  createEvent(event) {
    const endpoint = api + '/events/';
    return axios.post(endpoint, event);
  },


  getPosts(user) {
    const endpoint = api + '/posts/';
    return axios.get(endpoint);
  },

  createPost(post) {
    console.log(post);
    const endpoint = api + '/posts/';
    return axios.post(endpoint, post);
  },


  getCalendars(user) {
    const endpoint = api + '/calendars/';
    return axios.get(endpoint);
  }

}

export default GoRaceInfoAPI;
