const TOKEN_KEY = 'access_token';
const UID_KEY = 'uid';
const USERNAME_KEY = 'username';
const DISPLAY_NAME_KEY = 'displayName';


const { parse, stringify } = JSON;

function get(key) {
  if (localStorage && localStorage.getItem(key)) {
    return parse(localStorage.getItem(key)) || null;
  }

  return null;
}

function getToken() {
  return get(TOKEN_KEY);
}

function getUserId() {
  return get(UID_KEY);
}

function getUsername() {
  return get(USERNAME_KEY);
}

function getDisplayName() {
  return get(DISPLAY_NAME_KEY);
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

function setUserInfo(user) {
  console.log(user);
  set(UID_KEY, user.id, true);
  set(USERNAME_KEY, user.username, true);
  set(DISPLAY_NAME_KEY, `${user.first_name} ${user.last_name}`, true);
  return true;
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
  clear(UID_KEY);
  clear(USERNAME_KEY);
  clear(DISPLAY_NAME_KEY);
  return true;
}

export default {
  getToken,
  getUserId,
  getUsername,
  getDisplayName,
  setToken,
  setUserInfo,
  clearToken,
  clearUserInfo,
};
