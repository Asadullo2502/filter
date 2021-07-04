const { fetch } = require('../../models/model')

const users = (val) => fetch(`SELECT * FROM users WHERE LOWER(first_name || '' || last_name || '' || contact) LIKE LOWER('%${val}%')`)
const books = (val) => fetch(`SELECT * FROM books WHERE LOWER(book_name || '' || release_year || '' || janr) LIKE LOWER('%${val}%')`)
const films = (val) => fetch(`SELECT * FROM films WHERE LOWER(film_name || '' || release_year || '' || janr) LIKE LOWER('%${val}%')`)


module.exports = {
   users,
   books,
   films
}