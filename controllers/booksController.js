const db = require("../models")
const key = process.env.API_KEY
const axios = require('axios')

//Define methods
module.exports = {
    search: function (req, res) {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.id}&key=${key}`)
        .then(result => res.json(result.data.items))
        .catch(err => res.json(err))
    },
    findAll: function (req, res) {
        db.Book.find(req.query)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    addBook: function (req, res) {
        db.Book.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    remove: function (req, res) {
        db.Book.findById({ _id: req.params.id })
            .then(data => data.remove())
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    }
}