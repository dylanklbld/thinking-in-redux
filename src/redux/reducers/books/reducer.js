import { SET_BOOKS } from "../../actions/books";
import { initialState } from "../rootReducer";

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS: {
      return {
        // Again, one less level of nesting to copy
        ...state,
        books: action.payload,
      };
    }
    default:
      return state;
  }
};

export default booksReducer;
