//featurename
export const BOOKS = "[Books]";
//actiontypes
export const FETCH_BOOKS = `${BOOKS} FETCH`;
export const SET_BOOKS = `${BOOKS} SET`;

//action creators
export const setBooks = ({ books }) => ({
  type: SET_BOOKS,
  payload: books,
});

export const fetchBooks = ({ query }) => ({
  type: FETCH_BOOKS,
  payload: query,
});
