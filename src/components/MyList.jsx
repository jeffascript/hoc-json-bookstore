import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

class MyList extends Component {
  render() {
    const savedBooks = this.props.borrowedList.myBooks;
    return (
      <div className="row">
        <ul className="col-sm-12" style={{ listStyle: "none" }}>
          {savedBooks.length > 0
            ? savedBooks.map((book, i) => (
                <li key={i} className="my-4">
                  <Button
                    variant="danger"
                    onClick={() => console.log("To be removed")}
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
    );
  }
}

export default connect(mapStateToProps)(MyList);
