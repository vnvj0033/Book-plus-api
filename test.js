const add = require("./dao/book/addBook.js");
const getAll = require("./dao/book/getAllBook.js");
const getBook = require("./dao/book/getBook.js");
const removeAll = require("./dao/book/removeBook.js")
const loadBook = require("./kyobo/loadBook.js");


loadBook(
  1, 1
  , result => {

    console.log(result)
    // add(result[0])
    // getAll(result => console.log(result))

  }
)

