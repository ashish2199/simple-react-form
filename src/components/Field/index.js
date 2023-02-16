import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fieldAction, fieldSchema } from "store/actions/Form";
import {
  handleFieldValueChange,
  validateField,
  initialiseFieldSchema,
} from "store/actions/Field";
import {
  fieldErrorMessageSelector,
  fieldValueSelector,
} from "store/selectors/Field";
import { FormContext } from "context/formContext";

export function Field({
  label = "",
  type = "text",
  name = null,
  title = null,
  placeholder = null,
  required = false,
  pattern = null,
  min = null,
  max = null,
  maxLength = null,
  minLength = null,
  className = null,
}) {
  const dispatch = useDispatch();
  const { formName } = useContext(FormContext);
  const fieldValue = useSelector(fieldValueSelector(formName, name));
  const fieldErrorMessage = useSelector(
    fieldErrorMessageSelector(formName, name)
  );

  useEffect(function () {
    const initializeFieldSchemaAction = initialiseFieldSchema(formName, {
      name,
      type,
      required,
      pattern,
      min,
      max,
      maxLength,
      minLength,
    });
    dispatch(fieldSchema(formName, initializeFieldSchemaAction));
  }, []);

  function handleChange(evt) {
    evt.stopPropagation();
    const newValue = evt.target.value;

    const fieldValueChangeAction = handleFieldValueChange(
      formName,
      name,
      newValue
    );
    dispatch(fieldAction(formName, fieldValueChangeAction));

    const fieldValidateAction = validateField(formName, name);
    dispatch(fieldAction(formName, fieldValidateAction));
  }

  const fieldId = `${formName}_form_${name}`;

  return (
    <>
      {label ? <label htmlFor={fieldId}>{label}</label> : null}
      <input
        type={type}
        id={fieldId}
        name={name}
        title={title}
        onChange={handleChange}
        required={required}
        placeholder={placeholder}
        pattern={pattern}
        min={min}
        max={max}
        value={fieldValue || ""}
        maxLength={maxLength}
        minLength={minLength}
        className={fieldErrorMessage ? `error-field ${className}` : className}
      />
      {fieldErrorMessage && (
        <div className="field-error">{fieldErrorMessage}</div>
      )}
    </>
  );
}
