const express = require('express')
const router = express.Router()
const {uuid} = require('uuidv4')

let books = [
    {
        id: 1,
        name: 'Johny D',
        title: 'Вечера на хуторе'},
    {
        id: 2,
        name: 'J. London',
        title: 'Вампиры'},
    {
        id: 3,
        name: 'A.Cristy',
        title: '10 негритят'},
]

router.get('/', (req, res, next) => {
    res.json(books)
})

router.get('/:id', (req, res) => {

    const bookId = req.params.id

    const book = books.find(book => +bookId === book.id)

    if(book){
        return res.json(book)
    } else {
        res.status(404).send('Такой книги не найдено')
    }

    console.log(book)
})

router.post('/', (req, res) => {

    const newBook = {
        id: uuid() || Math.random(),
        name: req.body.name,
        title: req.body.title
    }

    books.push(newBook)

    return res.redirect('/books')

})

router.put('/:id', (req, res) => {
    const bookId = req.params.id

    books.forEach(book => {
        if(book.id === +bookId){
            book.title = req.body.title
            book.name = req.body.name
        }
    })

    return res.json(books)
})

router.delete('/:id', (req, res) => {
    const bookId = req.params.id

    books = books.filter(book => book.id !== +bookId)

    return res.json(books)

})


module.exports = router