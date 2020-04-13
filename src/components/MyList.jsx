import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { REMOVE_ITEM_FROM_BORROWEDLIST } from "../actions/actionTypes";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (book) =>
    dispatch({
      type: REMOVE_ITEM_FROM_BORROWEDLIST,
      payload: book,
    }),
});

class MyList extends Component {
  render() {
    const savedBooks = this.props.borrowedList.myBooks;
    return (
      <>
        <div className="row">
          <div className="col-12 p-5">
            <Button
              color="primary"
              onClick={() => this.props.history.push("/library")}
            >
              BACK TO LIBRARY
            </Button>
          </div>
          <ul className="col-sm-12" style={{ listStyle: "none" }}>
            {savedBooks.length > 0
              ? savedBooks.map((book, i) => (
                  <li key={i} className="my-4">
                    <Button
                      variant="danger"
                      onClick={() => this.props.removeFromCart(book)}
                    >
                      <FontAwesomeIcon icon={faTrash} id="trashIcon" />
                    </Button>
                    <img
                      className="book-cover-small"
                      src={book.imageUrl}
                      alt="book selected"
                    />
                    <span className="basket-text">{book.title}</span>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
