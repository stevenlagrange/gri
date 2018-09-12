let isValid;

function validateRequiredField(fieldName, input) {
  if (input.length < 1) {
    isValid = false;
    return `* ${fieldName} is required.`;
  }
  return '';
}

function validateForm(form) {
  const errors = {};
  isValid = true;
  errors.titleError = validateRequiredField('Title', form.title);
  errors.descriptionError = validateRequiredField('Description', form.description);
  return { valid: isValid, errors };
}

export default {
  validateForm,
};
