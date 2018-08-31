import axios from 'axios';
var config = require('./configuration.json');

var api;
if (config.active == "production") {
  api = config.production.url + config.production.version;
} else {
  api = config.development.url + config.development.version;
}


var requestHandler = axios.create({
  baseURL: api,
  timeout: 1000,
  withCredentials: true
});

const GoRaceInfoAPI = {

  setHeaders({token = null}) {
    if (token !== null) {
      requestHandler.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete requestHandler.defaults.headers.common['Authorization'];
    }
  },

  events({method = 'get', detail = '', token, data}) {
    this.setHeaders({token: token})
    return requestHandler({
      method: method,
      url: '/events/' + detail,
      data: data
    });
  },

  posts({method = 'get', detail = '', token, data}) {
    this.setHeaders({token: token})
    return requestHandler({
      method: method,
      url: '/posts/' + detail,
      data: data
    });
  },


  calendars({method = 'get', detail = '', token, data}) {
    this.setHeaders({token: token})
    return requestHandler({
      method: method,
      url: '/calendars/' + detail,
      data: data
    });
  },

  profiles({method = 'get', detail = '', token, data}) {
    this.setHeaders({token: token})
    return requestHandler({
      method: method,
      url: '/profiles/' + detail,
      data: data
    });
  },

  tokenObtain(username, password) {
    this.setHeaders({token: null})
    return requestHandler({
      method: 'post',
      url: '/auth/token/obtain/',
      data: {
        'username': username,
        'password': password
      }
    });
  },

  tokenRefresh(token) {
    this.setHeaders({token: null})
    return requestHandler({
      method: 'post',
      url: '/auth/token/refresh/',
      data: {
        'token' : token
      }
    });
  },

  tokenVerify(token) {
    this.setHeaders({token: null})
    return requestHandler({
      method: 'post',
      url: '/auth/token/verify/',
      data: {
        'token' : token
      }
    });
  }
}

export default GoRaceInfoAPI;
