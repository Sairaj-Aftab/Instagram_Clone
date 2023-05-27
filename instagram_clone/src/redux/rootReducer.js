import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import loadingReducer from "./loadingBar/reducer";

// create root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  loadingBar: loadingReducer,
});

export default rootReducer;
