const models = require("../models");
const parser = require("../axios/kyobo/parser")

module.exports = class BookDao {
  model = models.Book;

  add(book) {
    this.model
      .create({
        title: book.title,
        rank: book.rank,
        image_url: book.image_url,
        writer: book.writer,
        publisher: book.publisher,
        summary: book.summary,
      })
      .catch((err) => {
        console.error(err);
        console.log("✗ DB 연결 에러");
      });
  }


  getAll(callback) {
    this.model
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
    this.model
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

  removeAll(callback) {
    this.model
      .destroy({
        where: {},
        raw: true,
      })
      .then((result) => {
        callback(result);
      })
      .catch((error) => {
        callback(error);
      });
  }

  saveBooksForDB(platform, books) {
    books.forEach(book => {
      this.add(parser(book))
    });
  }
}
