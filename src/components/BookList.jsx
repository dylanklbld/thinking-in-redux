import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBooks } from "../redux/actions/books";

const BookList = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books);
  const notifications = useSelector((state) => state.notifications);

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
      <ul>
        {notifications.map((v) => (
          <li key={v.id}>{v.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
