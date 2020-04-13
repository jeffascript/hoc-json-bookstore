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
    }),
});

class BookDetail extends Component {
  state = {
    book: null,
  };

  handleRental = () => {
    this.props.addToCart(this.state.book);
    this.props.refresh();
    this.setState({
      book: null,
    });
  };

  render() {
    return this.state.book ? (
      <div className="col-sm-8">
        <div className="row mt-3">
          <div className="col-sm-12">
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
          <div className="col-sm-7">
            <div>
              <h6 className="font-weight-bold pt-2">Description:</h6>
              <p>{this.state.book.description}</p>
            </div>
            {this.props.user && this.props.user.username ? (
              this.props.borrowedList.myBooks.length >= 2 ? (
                <strong className="invalid">
                  You have reached your limit for now!
                </strong>
              ) : (
                <Button color="primary" onClick={this.handleRental}>
                  ADD TO MY LIST
                </Button>
              )
            ) : (
              <strong className="invalid">
                You need to be logged in to buy
              </strong>
            )}
          </div>
        </div>
      </div>
    ) : (
      <div className="col-sm-8">
        <div className="row margin-top">
          <div className="col-sm-12 text-center">
            <h3>Please select a book!</h3>
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bookSelected !== this.props.bookSelected) {
      this.setState({
        book: this.props.books.find(
          (book) => book.id === this.props.bookSelected
        ),
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
