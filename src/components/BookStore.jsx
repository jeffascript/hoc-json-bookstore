import React, { Component } from "react";
import { books } from "../data/books";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import BookRentalCounter from "./BookRentalCounter";

class BookStore extends Component {
  state = {
    bookSelected: null,
    allAvailableBooks: [],
  };

  changeBook = (id) => this.setState({ bookSelected: id });

  render() {
    return (
      <>
        <div>
          <BookRentalCounter />
        </div>

        <hr />

        {this.state.allAvailableBooks &&
        this.state.allAvailableBooks.length > 0 ? (
          <div className="container">
            <div className="row">
              <BookList
                bookSelected={this.state.bookSelected}
                changeBook={this.changeBook}
                books={this.state.allAvailableBooks}
              />
              <BookDetail
                bookSelected={this.state.bookSelected}
                books={this.state.allAvailableBooks}
                refresh={this.repopulateBooks}
              />
            </div>
          </div>
        ) : (
          <div className="container">
            <h3 className="mx-auto">
              Sorry, there is no book in our Library at the Moment.
            </h3>
          </div>
        )}
      </>
    );
  }

  repopulateBooks = () => {
    const jsonBooks = books;

    this.setState({
      allAvailableBooks: jsonBooks,
    });
  };

  componentDidMount = () => {
    this.repopulateBooks();
  };
}

export default BookStore;
