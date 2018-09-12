import API from '../_api';
import browserStorage from '../_utilities/browserStorage';
import history from '../history';

function refreshToken() {
  return API.tokenRefresh(browserStorage.getToken());
}

function verifyToken() {
  return API.tokenVerify(browserStorage.getToken());
}

function signout() {
  browserStorage.clearToken();
  history.push('/');
}

function authenticate() {
  browserStorage.clearToken();
  history.push('/login');
}

function login(username, password, cb) {
  API.tokenObtain(username, password)
    .then((response) => {
      browserStorage.setToken(response.data.access_token);
      browserStorage.setUserInfo(response.data.user);
      setTimeout(cb({ error: false }), 100);
    })
    .catch(() => {
      setTimeout(cb({ error: true }), 100);
    });
}

function verifyUser() {
  return verifyToken()
    .catch(() => {
      refreshToken()
        .catch(() => {
          authenticate();
        });
    });
}

export default {
  signout,
  authenticate,
  login,
  verifyUser,
};
