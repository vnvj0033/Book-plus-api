const models = require("../models");

class BookDao {
  bookModel = models.Book;

  add(book) {
    this.bookModel
      .create({
        title: book.title,
        rank: book.rank,
        imageUrl: book.imageUrl,
        wirter: book.wirter,
        publisher: book.publisher,
        summary: book.summary,
      })
      .catch((err) => {
        console.error(err);
        console.log("✗ DB 연결 에러");
      });
  }

  getAll(callback) {
    this.bookModel
      .findAll({
        raw: true,
      })
      .then((result) => {
        callback(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  get(title, callback) {
    this.bookModel
      .findAll({
        raw: true,
        where: [{ title: title }],
      })
      .then((result) => {
        callback(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  removeBook(callback) {
    this.bookModel
      .destroy({
        where: {},
        raw: true,
      })
      .then((result) => {
        callback(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

module.exports = BookDao;
