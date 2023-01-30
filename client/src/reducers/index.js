import { combineReducers } from "redux";
import idReducer from "./idReducer";
import { reducer as formReducer } from "redux-form";
import streamReducer from "./streamReducer";

export default combineReducers({
  currentUser: idReducer,
  form: formReducer,
  streams:streamReducer
}) //