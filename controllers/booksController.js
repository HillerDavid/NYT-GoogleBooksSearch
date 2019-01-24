const db = require("../models")

//Define methods
module.exports = {
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
    delete: function (req, res) {
        db.Book.findById({ _id: req.params.id })
            .then(data => data.remove())
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    }
}