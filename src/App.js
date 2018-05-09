import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI
      .getAll()
      .then(books => this.setState({books}))
  }

  handleMoveBook = (selectedBook, targetShelf) => {
    BooksAPI
      .update(selectedBook, targetShelf)
      .then(response => {
        selectedBook.shelf = targetShelf
        this.setState(state => ({
          books: state.books.filter(b => b.id!== selectedBook.id).concat(selectedBook)
        }))
      })
  }

  render() {
    const {books} = this.state
    return (
      <div className="app">
        <Route path="/" exact render={() => (
          <ListBooks
            onMoveBook={ this.handleMoveBook }
            books={ books }
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks
            onMoveBook={ this.handleMoveBook }
            books={ books }
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
