import { combineReducers } from "redux";
import idReducer from "./idReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  userState: idReducer,
  form: formReducer
})