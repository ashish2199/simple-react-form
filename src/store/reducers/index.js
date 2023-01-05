import { combineReducers } from "redux";
import FormReducer from "store/reducers/Form";

const reducers = combineReducers({
  Forms: FormReducer,
});

export default reducers;
