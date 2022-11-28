const book = require("../../models/book");
const models = require("../../models");

module.exports = function saveBook(book) {
  models.Book.create({
    title: book.title,
    rank: book.rank,
    imageUrl: book.imageUrl,
    wirter: book.wirter,
    publisher: book.publisher,
    summary: book.summary,
  }).catch((error) => {
    console.error(error);
  });
};
