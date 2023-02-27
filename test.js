const add = require("./dao/book/addBook.js");
const getAll = require("./dao/book/getAllBook.js");
const getBook = require("./dao/book/getBook.js");

getBook("booitle", (data) => {
  console.log(data);
});
