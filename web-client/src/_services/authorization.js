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

/*
  @desc Redirect to authenticate route.
*/
function redirectToAuthenticate() {
  browserStorage.clearToken();
  history.push('/login');
}

/*
  @desc Obtain API token to authenticate user.
*/
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

/*
  @desc Use to verify user to make sure token is still valid.
*/
function verifyUser() {
  return verifyToken()
    .catch(() => {
      refreshToken()
        .catch(() => {
          redirectToAuthenticate();
        });
    });
}

export default {
  signout,
  redirectToAuthenticate,
  login,
  verifyUser,
};
