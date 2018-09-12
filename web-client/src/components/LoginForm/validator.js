const rules = {
  minUsernameLength: 1,
  minPasswordLength: 7,
};

let isValid;


function validateUsername(username) {
  if (username.length < rules.minUsernameLength) {
    isValid = false;
    return `Username must be atleast ${rules.minUsernameLength} characters long.`;
  }

  return '';
}

function validatePassword(password) {
  if (password.length < rules.minPasswordLength) {
    isValid = false;
    return `Password must be atleast ${rules.minPasswordLength} characters long.`;
  }
  return '';
}

function validateForm(username, password) {
  const errors = {};
  isValid = true;
  errors.usernameError = validateUsername(username);
  errors.passwordError = validatePassword(password);
  return { valid: isValid, errors };
}

export default {
  validateForm,
};
