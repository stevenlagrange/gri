import axios from 'axios';

const config = require('./configuration.json');

let api;

if (config.active === 'production') {
  api = config.production.url + config.production.version;
} else {
  api = config.development.url + config.development.version;
}


const requestHandler = axios.create({
  baseURL: api,
  timeout: 1000,
  withCredentials: true,
});

const GoRaceInfoAPI = {

  setHeaders({ token = null }) {
    if (token !== null) {
      requestHandler.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      delete requestHandler.defaults.headers.common.Authorization;
    }
  },

  events({ method = 'get', detail = '', token, data }) {
    this.setHeaders({ token });
    return requestHandler({
      method,
      url: `/events/${detail}`,
      data,
    });
  },

  posts({ method = 'get', detail = '', token, data }) {
    this.setHeaders({ token });
    return requestHandler({
      method,
      url: `/posts/${detail}`,
      data,
    });
  },


  calendars({ method = 'get', detail = '', token, data }) {
    this.setHeaders({ token });
    return requestHandler({
      method,
      url: `/calendars/${detail}`,
      data,
    });
  },

  profiles({ method = 'get', detail = '', token, data }) {
    this.setHeaders({ token });
    return requestHandler({
      method,
      url: `/profiles/${detail}`,
      data,
    });
  },

  tokenObtain(username, password) {
    this.setHeaders({ token: null });
    return requestHandler({
      method: 'post',
      url: '/auth/token/obtain/',
      data: {
        username,
        password,
      },
    });
  },

  tokenRefresh(token) {
    this.setHeaders({ token: null });
    return requestHandler({
      method: 'post',
      url: '/auth/token/refresh/',
      data: {
        token,
      },
    });
  },

  tokenVerify(token) {
    this.setHeaders({ token: null });
    return requestHandler({
      method: 'post',
      url: '/auth/token/verify/',
      data: {
        token,
      },
    });
  },
};

export default GoRaceInfoAPI;
