import React from "react";
import Book from "./OneBook";

export default ({ books, changeBook, bookSelected }) => (
  <ul className="col-sm-8 col-md-6 col-lg-4 col-xs-12">
    {books && books.length > 0 ? books.map((book, index) => (
      <Book
        {...book}
        key={index}
        changeBook={changeBook}
        bookSelected={bookSelected}
      />
    )): <div>No Books</div>}
  </ul>
);
