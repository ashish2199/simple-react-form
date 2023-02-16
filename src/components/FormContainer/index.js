import { startCase } from "lodash";
import Form from "components/Form";
import { Field } from "components/Field";
import { FormDataViewer } from "components/FormDataViewer";
import formModel from "components/FormContainer/formModel";
import "./styles.scss";

export default function FormContainer() {
  const initialValue = {
    name: "",
    age: 12,
    email: "ashish2199@gmail.com",
    phone: "8447544220",
  };

  function getField(fieldConfig) {
    const {
      label,
      name,
      type,
      required = false,
      maxLength = null,
      minLength = null,
      maximum = null,
      minimum = null,
      pattern = null,
      description = null,
      className = null,
    } = fieldConfig;

    let fieldTypes = {
      string: "text",
      number: "number",
    };

    return (
      <Field
        label={label}
        type={fieldTypes[type]}
        name={name}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        min={minimum}
        max={maximum}
        title={description}
        pattern={pattern}
        className={className}
      />
    );
  }
  function getForm(formModel, initialValue) {
    return (
      <Form
        formName="contactForm"
        initialValue={initialValue}
        onSubmit={() => {
          alert("Form submitted.");
        }}
      >
        {Object.entries(formModel.properties).map(([key, value]) => {
          let requiredFields = formModel.required || [];
          return getField({
            ...value,
            label: `${startCase(key)} :`,
            name: `${key}`,
            required: requiredFields.indexOf(key) > -1,
          });
        })}
        <input type="reset" value="Reset" className="red-border" />
        <input type="submit" value="Submit" />
      </Form>
    );
  }
  return (
    <div className="form-container">
      <h2>Contact us</h2>
      {getForm(formModel, initialValue)}
      <FormDataViewer formName="contactForm" />
    </div>
  );
}
