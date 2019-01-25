import React, {Component} from "react"
import Book from './Book'

class BookList extends Component {
    state = {
        books: [],
        title: "",
        authors: [],
        description: "",
        image: "",
        link: ""
    }



    render() {
        return (
            <div>
                {this.state.books.length ? (
                    <h1>Books display</h1>
                ) : (
                    <h1>No books to display.</h1>
                )}
            </div>
        )
    }
}

export default BookList