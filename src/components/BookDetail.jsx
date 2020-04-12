import React, { Component } from "react";


class BookDetail extends Component {
  state = {
    book: null,
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
            <p>
              <p className="font-weight-bold">Description:</p>
              {this.state.book.description}
            </p>

            
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
      console.log("updated");
      this.setState({
        book: this.props.books.find(
          (book) => book.id === this.props.bookSelected
        ),
      });
    }
  }
}

export default BookDetail;
