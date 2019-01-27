import React, { Component } from "react"
import Container from '../components/Container'
import BookList from '../components/BookList'
import SearchBar from '../components/SearchBar'
import API from '../utils/API'

class Search extends Component {
    state = { books: [] }

    handleSearch = query => {
        API.searchBooks(query).then(results => {
            console.log(results.data)
            this.setState({ books: results.data })
        })
    }

    render() {
        return (
            <div className="container">
                <Container name="Search">
                    <SearchBar handleSearch={this.handleSearch} />
                </Container>
                <Container name="Book List">
                    <BookList books={this.state.books} />
                </Container>
            </div>
        )
    }
}

export default Search