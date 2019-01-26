import axios from 'axios'

export default {
    getBooks = () => {
        return axios.get('/api/books')
    },
    saveBook = (book) => {
        return axios.post('/api/books/' + book)
    },
    searchBooks = (query) => {
        return axios.get('/api/books/' + query)
    },
    deleteBook = (id) => {
        return axios.delete('/api/books/' + id)
    }
}