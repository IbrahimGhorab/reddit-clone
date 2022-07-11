import { combineReducers } from "redux";
import { postReducer } from "./postsReducer";
import { userReducer } from "./userReducer";
import { themeReducer } from "./themeReducer";

const reducers = combineReducers({ postReducer, userReducer, themeReducer });
export default reducers;
