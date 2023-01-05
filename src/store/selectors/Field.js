export function fieldValueSelector(formName, name) {
  return function (state) {
    if (state["Forms"]) {
      const formState = state["Forms"][formName];
      return formState?.values[name];
    }
  };
}

export function fieldErrorMessageSelector(formName, name) {
  return function (state) {
    if (state["Forms"]) {
      const formState = state["Forms"][formName];
      const errors = formState?.validationErrors;
      if (errors) {
        return errors[name];
      }
    }
  };
}
