import { API_ERROR, API_SUCCESS, apiRequest } from "../actions/core/api";
import { BOOKS, FETCH_BOOKS, setBooks } from "../actions/books";
import { setLoader, setNotification } from "../actions/core/ui";

const BOOKS_URL = "https://www.googleapis.com/books/v1/volumes?q=redux";

const booksMiddleware = () => (next) => (action) => {
  next(action);

  switch (action.type) {
    case FETCH_BOOKS: {
      next([
        setLoader({ state: true, feature: BOOKS }),
        apiRequest({
          body: null,
          method: "GET",
          url: BOOKS_URL,
          feature: BOOKS,
        }),
      ]);
      break;
    }
    case `${BOOKS} ${API_SUCCESS}`: {
      next([
        setBooks({ books: action.payload.items, normalizeKey: "id" }),
        setLoader({ state: false, feature: BOOKS }),
      ]);
      break;
    }
    case `${BOOKS} ${API_ERROR}`: {
      next([
        setNotification({ message: action.payload.message, feature: BOOKS }),
        setLoader({ state: false, feature: BOOKS }),
      ]);
      break;
    }
  }
};

export default booksMiddleware;
