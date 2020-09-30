const rules = {
  minUsernameLength: 1,
  maxUsernameLength: 20,
  minFirstNameLength: 1,
  maxFirstNameLength: 20,
  minLastNameLength: 1,
  maxLastNameLength: 20,
  minEmailLength: 1,
  minPasswordLength: 7,
};

let isValid;

function validateUsername(username) {
  const field = 'Username';
  if (username.length < rules.minUsernameLength || username.length > rules.maxUsernameLength) {
    isValid = false;
    return `${field} must be between ${rules.minUsernameLength} and ${rules.maxUsernameLength} characters long.`;
  }

  return '';
}

function validateFirstName(firstName) {
  const field = 'First Name';
  if (firstName.length < rules.minFirstNameLength || firstName.length > rules.maxFirstNameLength) {
    isValid = false;
    return `${field} must be between ${rules.minFirstNameLength} and ${rules.maxFirstNameLength} characters long.`;
  }

  return '';
}

function validateLastName(lastName) {
  const field = 'Last Name';
  if (lastName.length < rules.minLastNameLength || lastName.length > rules.maxLastNameLength) {
    isValid = false;
    return `${field} must be between ${rules.minLastNameLength} and ${rules.maxLastNameLength} characters long.`;
  }

  return '';
}

function validateEmail(email) {
  const field = 'Email';
  if (email.length < rules.minEmailLength) {
    isValid = false;
    return `${field} is required.`;
  }

  return '';
}

function validatePassword(password) {
  const field = 'Password';
  if (password.length < rules.minPasswordLength || password.length > rules.maxPasswordLength) {
    isValid = false;
    return `${field} must be between ${rules.minFirstNameLength} and ${rules.maxFirstNameLength} characters long.`;
  }

  return '';
}

function validateForm(form) {
  const errors = {};
  isValid = true;
  console.log(form);
  errors.usernameError = validateUsername(form.username);
  errors.firstNameError = validateFirstName(form.firstName);
  errors.lastNameError = validateLastName(form.lastName);
  errors.emailError = validateEmail(form.email);
  errors.passwordError = validatePassword(form.password);
  return { valid: isValid, errors };
}

export default {
  validateForm,
};
