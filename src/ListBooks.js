import React, { Component } from 'react';
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              onMoveBook={ this.props.onMoveBook }
              shelf="currentlyReading"
              books={ this.props.books.filter((book) => book.shelf==="currentlyReading") }
            />
            <Bookshelf
              onMoveBook={ this.props.onMoveBook }
              shelf="wantToRead"
              books={ this.props.books.filter((book) => book.shelf==="wantToRead") }
            />
            <Bookshelf
              onMoveBook={ this.props.onMoveBook }
              shelf="read"
              books={ this.props.books.filter((book) => book.shelf==="read") }
            />
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
     )
  }
}

export default ListBooks;
