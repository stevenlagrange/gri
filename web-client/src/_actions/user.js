
export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export function saveUserInfo(user) {
  return {
    type: SAVE_USER_INFO,
    user,
  };
}

export const GET_USER_INFO = 'GET_USER_INFO';
export function getUserInfo() {
  return {
    type: GET_USER_INFO,
  };
}
