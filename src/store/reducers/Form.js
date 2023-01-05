import { FORM_ACTIONS } from "store/actions/Form";
import { fieldReducer } from "store/reducers/Field";
import { getValidationError } from "utils/FieldValidator";

const initialState = {};

export default function formReducer(state = initialState, action) {
  const formName = action?.payload?.formName;
  let newState = state;
  switch (action.type) {
    case FORM_ACTIONS.FIELDS_CHANGE: /* fallthrough */
    case FORM_ACTIONS.FIELDS_SCHEMA_CHANGE: {
      let newFormState = fieldReducer(
        state[formName],
        action.payload.subAction
      );
      newState = {
        ...state,
        [formName]: newFormState,
      };
      break;
    }

    case FORM_ACTIONS.INIT_FORM: {
      const initialFormData = action.payload.initialValue || {};
      newState = {
        ...state,
        [formName]: {
          ...state[formName],
          values: initialFormData,
        },
      };
      break;
    }

    case FORM_ACTIONS.RESET_FORM: {
      newState = {
        ...state,
        [formName]: {
          ...state[formName],
          values: {},
          validationErrors: {},
        },
      };
      break;
    }

    case FORM_ACTIONS.VALIDATE_FORM: {
      const fieldNames = Object.keys(state[formName].schema);
      const errors = fieldNames.reduce((errors, fieldName) => {
        const value = state[formName].values[fieldName];
        const fieldConfig = state[formName].schema[fieldName];
        const error = getValidationError(fieldName, value, fieldConfig);
        errors[fieldName] = error[fieldName];
        return errors;
      }, {});
      newState = {
        ...state,
        [formName]: {
          ...state[formName],
          validationErrors: errors,
        },
      };
    }

    default:
      console.log("Invalid action specified for formReducer", action.type);
  }

  return newState;
}
