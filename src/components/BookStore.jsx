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
    if (myBooks.length > 0) {
      const newBooklist = jsonBooks.filter(
        (oneBook) => !myBooks.some((item) => item.id === oneBook.id)
      );

      this.setState({
        allAvailableBooks: newBooklist,
      });
    } else {
      this.setState({
        allAvailableBooks: jsonBooks,
      });
    }
  };

  componentDidMount = () => {
    this.repopulateBooks();
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
