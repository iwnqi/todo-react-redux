import { combineReducers } from "redux";
import addItemReducer from "./reducers/addItemReducer";
import appReducer from "./reducers/appReducer";
export default combineReducers({
  appReducer,
  addItemReducer,
});
