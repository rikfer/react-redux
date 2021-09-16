import { combineReducers } from "redux";
import posts from "./postReducer";
import comments from "./commentReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  posts,
  comments,
  apiCallsInProgress
});

export default rootReducer;
