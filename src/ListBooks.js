import React from 'react';
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

const ListBooks = (props) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <Bookshelf
          onMoveBook={ props.onMoveBook }
          shelf="currentlyReading"
          books={ props.books.filter((book) => book.shelf==="currentlyReading") }
        />
        <Bookshelf
          onMoveBook={ props.onMoveBook }
          shelf="wantToRead"
          books={ props.books.filter((book) => book.shelf==="wantToRead") }
        />
        <Bookshelf
          onMoveBook={ props.onMoveBook }
          shelf="read"
          books={ props.books.filter((book) => book.shelf==="read") }
        />
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
)

export default ListBooks;
