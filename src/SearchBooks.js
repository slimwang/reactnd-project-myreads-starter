import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
    query: '',
    searchedBooks: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim()})
    if(query) {
      this.getSearchedBooks(query)
    }else{
      this.setState({searchedBooks: []})
    }
  }

  getSearchedBooks(query) {
    BooksAPI
      .search(query)
      .then(response => {
        if(this.state.query) {
          this.mergeBooks(response)
        }
      })
  }

  mergeBooks(response) {
    const allBooks = this.props.books
    const newBooks = response
    let mergedBooks = []
    newBooks.forEach(nbook => {
      const book = allBooks.find(function f(b){
        return b.id === this.id;
      }, nbook)
      if(book) {
        mergedBooks.push(book)
      }else{
        mergedBooks.push(nbook)
      }
    })
    console.log(mergedBooks)
    this.setState({searchedBooks: mergedBooks})
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          { this.state.query && (
            <Bookshelf
              onMoveBook={ this.props.onMoveBook }
              books={this.state.searchedBooks}
            />
          ) }
        </div>
      </div>
    )
  }
}

export default SearchBooks
