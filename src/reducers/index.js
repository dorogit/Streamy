import { combineReducers } from "redux";
import idReducer from "./idReducer";

export default combineReducers({
  userState: idReducer
})