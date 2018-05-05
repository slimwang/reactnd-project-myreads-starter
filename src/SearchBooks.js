import React, { Component } from 'react'
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
          this.setState({searchedBooks: response})
        }
      })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
