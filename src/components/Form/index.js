import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  initialiseForm,
  resetFormValues,
  validateForm,
} from "store/actions/Form";
import { formValidationErrorsSelector } from "store/selectors/Form";
import { FormContext } from "context/formContext";
import "./styles.scss";

export default function Form({
  formName = "",
  onSubmit = () => {},
  children,
  initialValue,
  title = "",
}) {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(initialiseForm(formName, initialValue));
  }, []);

  function resetForm() {
    const resetAction = resetFormValues(formName);
    dispatch(resetAction);
  }

  function validateCurrentForm() {
    return (dispatch, getState) => {
      dispatch(validateForm(formName));
      const state = getState();
      const validationErrors = formValidationErrorsSelector(formName)(state);
      return validationErrors;
    };
  }

  function onSubmitHandler(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const validationErrors = dispatch(validateCurrentForm());
    if (validationErrors.length === 0) {
      onSubmit();
    }
  }

  return (
    <>
      {title && <h2>{title}</h2>}
      <form
        className="form"
        onSubmit={onSubmitHandler}
        onReset={resetForm}
        noValidate
      >
        <FormContext.Provider value={{ formName }}>
          {children}
        </FormContext.Provider>
      </form>
    </>
  );
}
