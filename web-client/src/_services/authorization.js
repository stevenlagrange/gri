import API from '../_api';
import { browserStorage } from '../_utilities/browserStorage';
import Errors from '../_constants/errors'; 
import history from '../history';

export const Authorization = {
  signout,
  login,
  verifyUser
}

function obtainToken(username, password) {
  // Retrieve user `access_token` using Basic Authentication.
  return API.tokenObtain(username, password);
}

function refreshToken() {
  // Refresh `access_token`.
  return API.tokenRefresh(browserStorage.getToken());
}

function verifyToken() {
  // Verify `access_token`.
  return API.tokenVerify(browserStorage.getToken());
}


function signout() {
  browserStorage.clearToken();
  history.push('/');
}

function login(username, password, cb) {
  API.tokenObtain(username, password)
    .then(function (response) {
      browserStorage.setToken(response.data.access_token);
      browserStorage.setUserInfo(response.data.user.id);
      setTimeout(cb, 100);
    })
    .catch(function (response) {
      let msg = 'Failed to log in. Try again. Status ' + response.status;
      console.log(msg);
      setTimeout(cb, 100);
    });
}

function verifyUser() {
  return verifyToken().then((response) => { console.log('Token verify successful.') })
    .catch((response) => {
     // The Token is not longer valid. Try refreshing token.
     console.log('Token invalid.');
     refreshToken().then((response) => { console.log('Refreshed token.')})
      .catch((response) => { console.log('Sign out user')})
    });
}
