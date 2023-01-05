import { useSelector } from "react-redux";

import { formValuesSelector } from "store/selectors/Form";

import "./styles.scss";

export function FormDataViewer({ formName }) {
  const formValues = useSelector(formValuesSelector(formName));
  let formData = [];
  if (formValues) {
    formData = Object.keys(formValues).map((key) => {
      return [
        <span className="data-key">{key}</span>,
        <span className="data-value">{formValues[key]}</span>,
      ];
    });
  }

  return (
    <>
      {formData.length > 0 ? (
        <div className="form-data-container">
          <div className="header">Values</div>
          <div className="form-data-viewer">{formData}</div>
        </div>
      ) : null}
    </>
  );
}
