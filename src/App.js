import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
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
        <Route path="/" exact render={() => (
          <ListBooks
            onMoveBook={ this.handleMoveBook }
            books={ this.state.books }
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks
            onMoveBook={ this.handleMoveBook }
            books={ this.state.books }
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
