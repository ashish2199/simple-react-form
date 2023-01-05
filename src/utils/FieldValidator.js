export function getValidationError(fieldName, value, fieldConfig) {
  const { required, type, pattern, min, max, maxLength, minLength } =
    fieldConfig;
  const errors = { [fieldName]: null };

  if (required) {
    if (!value) {
      errors[fieldName] = "This field cannot be empty.";
    }
  }

  if (value) {
    if (type === "number") {
      let n = parseInt(value);
      if (isNaN(n)) {
        errors[fieldName] = "This field should contain only numbers.";
      }

      if (min && n < min) {
        errors[fieldName] = "Cannot be less than " + min;
      }

      if (min && n > max) {
        errors[fieldName] = "Cannot be greater than " + max;
      }
    }

    if (pattern) {
      if (!new RegExp(pattern).test(value)) {
        errors[fieldName] = "Please enter value in correct format.";
      }
    }

    if (maxLength && value.length > maxLength) {
      errors[fieldName] =
        "Value enter cannot be greater than " + maxLength + " characters.";
    }

    if (minLength && value.length < minLength) {
      errors[fieldName] =
        "Value enter cannot be lesser than " + minLength + " characters.";
    }
  }

  return errors;
}
