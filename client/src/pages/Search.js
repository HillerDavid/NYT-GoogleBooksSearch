import React, { Component } from "react"
import Container from '../components/Container'
import BookList from '../components/BookList'
import SearchBar from '../components/SearchBar'
import API from '../utils/API'

class Search extends Component {
    state = { books: [] }

    render() {
        return (
            <div class="container">
                <Container name="Search">
                    <SearchBar />
                </Container>
                <Container name="Book List">
                    <BookList />
                </Container>
            </div>
        )
    }
}

export default Search