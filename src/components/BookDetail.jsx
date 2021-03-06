import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { ADD_ITEM_TO_BORROWEDLIST } from "../actions/actionTypes";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToCart: (book) =>
    dispatch({
      type: ADD_ITEM_TO_BORROWEDLIST,
      payload: book,
    })
});

class BookDetail extends Component {
  state = {
    book: null,
    alreadySaved: false
  };

  handleRental = () => {
    this.props.addToCart(this.state.book);
    this.props.updateBookStore();
    this.setState({
      book: null,
    });
  };

  render() {
    return this.state.book ? (
      <div className="col-sm-8">
        <div className="row mt-3">
          <div className="col-sm-12">
          { this.props.borrowedList.myBooks.length >=2  && <h6 className="invalid">You have reached your limit of 2 books! </h6>} 
            <h1>{this.state.book.title}</h1>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-5 mt-3">
            <img
              className="book-cover"
              src={this.state.book.imageUrl}
              alt="book selected"
            />
          </div>
          <div className="ol-sm-8 col-md-6 col-xs-12">
            <div>
              <h6 className="font-weight-bold pt-2">Description:</h6>
              <p>{this.state.book.description}</p>
            </div>
            {this.props.user && this.props.user.username ? (
              this.props.borrowedList.myBooks.length >= 2 || this.state.alreadySaved ? (
                <strong className="invalid">
                   Only 1 copy of this book can be borrowed at each time! <br />
              Maximum amount of books you can borrow from the library is two! 
                </strong>
              ) : (
                <Button className="add-to-list" color="primary" onClick={this.handleRental}>
                  ADD TO MY LIST
                </Button>
              )
            ) : (
              <strong className="invalid">
                You need to be logged in to rent
              </strong>
            )}
          </div>
        </div>
      </div>
    ) : (
      <div className="col-sm-8">
        <div className="row margin-top">
          <div className="col-sm-12 text-center">
          { this.props.borrowedList.myBooks.length >=2  ? <h6>You have reached your limit! Delete books from your collection to have free slot</h6>: <h3>Please select a book!</h3>} 
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.bookSelected !== this.props.bookSelected || prevProps.borrowedList.myBooks.length !== this.props.borrowedList.myBooks.length || prevState.alreadySaved !== this.state.alreadySaved) {
      this.setState({
        book: this.props.books.find(
          (book) => book.id === this.props.bookSelected
        ),
        alreadySaved : this.props.borrowedList.myBooks.some(book=> book.id === this.props.bookSelected) 
/**
 * alreadySaved will be set to === true, if the book selected is already on the saved collection; some() method returns a boolean)
 */

      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
