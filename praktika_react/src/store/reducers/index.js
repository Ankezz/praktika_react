import { combineReducers } from "redux";
import selectionReducer from "./selectionReducer";
import formReducer from "./formReducer";

export default combineReducers({
  selection: selectionReducer,
  form: formReducer
});