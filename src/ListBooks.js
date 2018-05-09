import React from 'react';
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

const shelves = ["currentlyReading", "wantToRead", "read"]

const ListBooks = (props) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        {shelves.map(shelf => (
          <Bookshelf
            onMoveBook={ props.onMoveBook }
            shelf={shelf}
            books={ props.books.filter(book => book.shelf===shelf) }
          />
        ))}
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
)

export default ListBooks;
