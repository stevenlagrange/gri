import axios from 'axios';

const TOKEN_KEY = 'access_token';
const USER_KEY = 'user';

const parse = JSON.parse;
const stringify = JSON.stringify;


function get(key) {
  if (localStorage && localStorage.getItem(key)) {
    return parse(localStorage.getItem(key)) || null;
  }

  return null;
}

function getToken() {
  return get(TOKEN_KEY);
}

function getUserInfo() {
  return get(USER_KEY);
}

function set(key, value, islocalStorage) {
  if (localStorage && islocalStorage) {
    return localStorage.setItem(key, stringify(value));
  }
  return null;
}

function setToken(token) {
  return set(TOKEN_KEY, token, true);
}

function setUserInfo(id) {
  return set(USER_KEY, id, true);
}

function clear(key) {
  if (localStorage && localStorage.getItem(key)) {
    return localStorage.removeItem(key);
  }
  return null;
}

function clearToken() {
  return clear(TOKEN_KEY);
}

function clearUserInfo() {
  return clear(USER_KEY);
}


export const browserStorage = {
  getToken,
  setToken,
  clearToken,
  getUserInfo,
  setUserInfo,
  clearUserInfo
};
