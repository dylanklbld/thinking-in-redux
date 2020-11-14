import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBooks } from "../redux/actions/books";

const BookList = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books);

  const handleFetchBooks = () => {
    dispatch(fetchBooks({ query: "GOVNO" }));
  };

  useEffect(() => {
    console.log(books);
  }, [books]);

  return (
    <div>
      Books
      <button type="button" onClick={handleFetchBooks}>
        Fetch books
      </button>
    </div>
  );
};

export default BookList;
