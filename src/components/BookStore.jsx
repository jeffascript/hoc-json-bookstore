import React, { Component } from "react";
import { books } from "../data/books";
import BookList from "./BookList";
import BookDetail from "./BookDetail";

class BookStore extends Component {
  state = {
    bookSelected: null,
    allAvailableBooks: [],
  };

  changeBook = (id) => this.setState({ bookSelected: id });

  render() {
    return (
      <>
        <hr />

        {this.state.allAvailableBooks && this.state.allAvailableBooks.length > 0 ? (
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
              />
            </div>
          </div>
        ) : (
          <div className="container">
            <h3 className="mx-auto">Sorry, there is no book in our Library at the Moment.</h3>
          </div>
        )}
      </>
    );
  }

  componentDidMount = () => {
    const jsonBooks = books;

    this.setState({
      allAvailableBooks: jsonBooks,
    });
  };
}

export default BookStore;
