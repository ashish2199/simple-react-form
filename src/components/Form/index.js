import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  initialiseForm,
  resetFormValues,
  validateForm,
} from "store/actions/Form";
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

  function onSubmitHandler(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    dispatch(validateForm(formName));
    onSubmit(evt);
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
