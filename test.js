const add = require("./dao/book/addBook.js");
const getAll = require("./dao/book/getAllBook.js");
const getBook = require("./dao/book/getBook.js");
const loadBook = require("./kyobo/loadBook.js");

loadBook(0, 2, (result) => {
  console.log(result);
});
