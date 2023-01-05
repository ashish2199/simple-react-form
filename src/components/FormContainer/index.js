import Form from "components/Form";
import { Field } from "components/Field";
import { FormDataViewer } from "components/FormDataViewer";
import "./styles.scss";

export default function FormContainer() {
  const initialValue = {
    name: "",
    age: 12,
    email: "ashish2199@gmail.com",
    phone: "8447544220",
  };

  return (
    <div className="form-container">
      <Form
        formName="contactForm"
        initialValue={initialValue}
        title="Contact us"
      >
        <Field
          label="Name:"
          type="text"
          name="name"
          required={true}
          maxLength={5}
          minLength={3}
          title="Please enter your name as per your documents."
        />

        <Field
          label="Age:"
          type="number"
          name="age"
          title="Please enter your age as per your documents."
          placeholder="18 - 100"
          min="18"
          max="100"
        />

        <Field
          label="Email:"
          type="email"
          name="email"
          title="Please provide only gmail email address"
          required={true}
          placeholder="username@gmail.com"
          pattern=".+@gmail\.com$"
        />

        <Field
          label="Enter your phone number:"
          type="tel"
          name="phone"
          title="Please provide registered mobile number"
          required={true}
          placeholder="XXXXXXXXXX"
          pattern="^[0-9]{10}$"
        />

        <input type="reset" value="Reset" />
        <input type="submit" value="Submit" />
      </Form>
      <FormDataViewer formName="contactForm" />
    </div>
  );
}
