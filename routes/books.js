const express = require('express')
const router = express.Router()

let books = [{
    id: 1,
    name: 'Johny D',
    title: 'Вечера на хуторе'
}]

router.get('/', (req, res, next) => {
    res.json(books)
})

module.exports = router