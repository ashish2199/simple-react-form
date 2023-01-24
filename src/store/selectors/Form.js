export function formValuesSelector(formName) {
  return function (state) {
    if (state["Forms"]) {
      const formState = state["Forms"][formName];
      return formState?.values;
    }
  };
}

export function formValidationErrorsSelector(formName) {
  return function (state) {
    if (state["Forms"]) {
      const formState = state["Forms"][formName];
      const errors = formState?.validationErrors;
      return Object.values(errors).filter((error) => error);
    }
  };
}
