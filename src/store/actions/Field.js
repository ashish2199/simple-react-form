const FIELD_ACTIONS = {
  INIT_FIELD_SCHEMA: "INIT_FIELD_SCHEMA",
  VALIDATE: "VALIDATE_FIELD",
  HANDLE_CHANGE: "HANDLE_FIELD_CHANGE",
};

function validateField(formName, fieldName) {
  return {
    type: FIELD_ACTIONS.VALIDATE,
    payload: {
      formName,
      fieldName,
    },
  };
}

function handleFieldValueChange(formName, fieldName, newValue) {
  return {
    type: FIELD_ACTIONS.HANDLE_CHANGE,
    payload: {
      formName,
      fieldName,
      newValue,
    },
  };
}

function initialiseFieldSchema(formName, fieldConfig) {
  return {
    type: FIELD_ACTIONS.INIT_FIELD_SCHEMA,
    payload: {
      formName,
      fieldConfig,
    },
  };
}

export {
  FIELD_ACTIONS,
  validateField,
  handleFieldValueChange,
  initialiseFieldSchema,
};
