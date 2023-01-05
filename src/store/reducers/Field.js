import { FIELD_ACTIONS } from "store/actions/Field";
import { getValidationError } from "utils/FieldValidator";

const initialState = {};

export function fieldReducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case FIELD_ACTIONS.HANDLE_CHANGE: {
      if (state) {
        const { fieldName, newValue } = action.payload;

        newState = {
          ...state,
          values: {
            ...state.values,
            [fieldName]: newValue,
          },
        };
      }
      break;
    }

    case FIELD_ACTIONS.VALIDATE: {
      if (state) {
        const { fieldName } = action.payload;

        const value = state["values"][fieldName];
        const fieldConfig = state["schema"][fieldName];
        const error = getValidationError(fieldName, value, fieldConfig);

        newState = {
          ...state,
          validationErrors: {
            ...state["validationErrors"],
            ...error,
          },
        };
      }
      break;
    }

    case FIELD_ACTIONS.INIT_FIELD_SCHEMA: {
      if (state) {
        const { fieldConfig } = action.payload;
        newState = {
          ...state,
          schema: {
            ...state.schema,
            [fieldConfig.name]: fieldConfig,
          },
        };
      }
      break;
    }

    default:
      console.error("Invalid action specified for fieldReducer", action.type);
  }

  return newState;
}
