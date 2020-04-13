
import React from "react"
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import BookList from "./BookList"
import {books} from "../data/books"

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without books", () => {
    act(() => {
      render(<BookList />, container);
    });
    expect(container.textContent).toBe("No Books");
    act(() => {
      render(<BookList books={books} />, container);
    });
    expect(container.querySelectorAll(".single-book").length).toBe(books.length);

  });