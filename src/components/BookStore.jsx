import React, { Component } from 'react';
import { books } from "../data/books"
import BookList from "./BookList"
import BookDetail from './BookDetail';


class BookStore extends Component {

    state={
        bookSelected: null
    }



    changeBook = id => this.setState({ bookSelected: id });

    render() {
        return (
         <div className="container">
                <div className="row">
                     <BookList
              bookSelected={this.state.bookSelected}
              changeBook={this.changeBook}
              books={books}
            />
            <BookDetail bookSelected={this.state.bookSelected} books={books} />
                </div>
         </div >
        );
    }
}

export default BookStore;