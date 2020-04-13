import React, { Component } from "react";
import { books } from "../data/books";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import BookRentalCounter from "./BookRentalCounter";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

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
                updateBookStore={this.removebookFromStore}
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
    const { myBooks } = this.props.borrowedList;

    const updatedBooksWithNewQty = jsonBooks
      .map((book) => {
        let addedToBorrowedList = myBooks.some((item) => item.id === book.id);
        return addedToBorrowedList
          ? { ...book, quantity: book.quantity - 1 }
          : book;
      })
      .filter((allCopies) => allCopies.quantity > 0);

    this.setState({
      allAvailableBooks: updatedBooksWithNewQty,
    });

  };

  componentDidMount = () => {
    this.repopulateBooks();
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.borrowedList.myBooks !== this.props.borrowedList.myBooks) {
      this.repopulateBooks();
    }
  };

  removebookFromStore = () => {
    const { bookSelected, allAvailableBooks } = this.state;
    this.setState({
      allAvailableBooks: allAvailableBooks.filter(
        (oneBook) => oneBook.id !== bookSelected
      ),
    });
  };
}

export default connect(mapStateToProps)(BookStore);
