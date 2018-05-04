import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true,
    books: [],
  }

  componentDidMount() {
    this.getAllBooks()
  }

  handleMoveBook = (selectedBook, targetShelf) => {
    BooksAPI
      .update(selectedBook, targetShelf)
      .then(response => this.getAllBooks())
  }

  getAllBooks() {
    BooksAPI
      .getAll()
      .then(books => this.setState({books: books}))
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks />
        ) : (
          <ListBooks
            onMoveBook={ this.handleMoveBook }
            books={ this.state.books }
          />
        )}
      </div>
    )
  }
}

export default BooksApp
