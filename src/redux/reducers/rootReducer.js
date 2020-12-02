import booksReducer from "./books/reducer";
import { combineReducers } from "redux";
import loaderReducer from "./ui/loader";
import notificationReducer from "./ui/notification";
import { undoable } from "../enhancers/undoable";

export const initialState = {
  books: [],
  movies: [],
};

const rootReducer = combineReducers({
  books: undoable(booksReducer),
  ui: loaderReducer,
  notifications: notificationReducer,
});

export default rootReducer;
