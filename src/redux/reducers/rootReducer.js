import booksReducer from "./books/reducer";
import { combineReducers } from "redux";
import loaderReducer from "./ui/loader";
import notificationReducer from "./ui/notification";

export const initialState = {
  books: [],
  movies: [],
};

const rootReducer = combineReducers({
  books: booksReducer,
  ui: loaderReducer,
  notifications: notificationReducer,
});

export default rootReducer;
