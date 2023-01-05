const FORM_ACTIONS = {
  INIT_FORM: "INITIALISE_FORM",
  RESET_FORM: "RESET_FORM",
  FIELDS_CHANGE: "FIELDS_CHANGE",
  FIELDS_SCHEMA_CHANGE: "FIELDS_SCHEMA_CHANGE",
  VALIDATE_FORM: "VALIDATE_FORM",
};

function initialiseForm(formName, initialValue) {
  return {
    type: FORM_ACTIONS.INIT_FORM,
    payload: {
      formName,
      initialValue,
    },
  };
}

function resetFormValues(formName) {
  return {
    type: FORM_ACTIONS.RESET_FORM,
    payload: {
      formName,
    },
  };
}

function validateForm(formName) {
  return {
    type: FORM_ACTIONS.VALIDATE_FORM,
    payload: {
      formName,
    },
  };
}

function fieldAction(formName, subAction) {
  return {
    type: FORM_ACTIONS.FIELDS_CHANGE,
    payload: {
      formName,
      subAction,
    },
  };
}

function fieldSchema(formName, subAction) {
  return {
    type: FORM_ACTIONS.FIELDS_SCHEMA_CHANGE,
    payload: {
      formName,
      subAction,
    },
  };
}

export {
  FORM_ACTIONS,
  initialiseForm,
  resetFormValues,
  fieldAction,
  fieldSchema,
  validateForm,
};
