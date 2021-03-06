const router = require('express').Router()
const booksController = require('../../controllers/booksController')

router.route('/').get(booksController.findAll)
    .post(booksController.addBook)

router.route('/:id').delete(booksController.remove)
    .get(booksController.search)

module.exports = router