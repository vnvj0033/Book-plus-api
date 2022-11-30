const models = require("../../models");

export function findBook(title, callback) {
  if (title == undefined) {
    title = "";
  }

  models.sequelize
    .sync()
    .then(() => {
      let books;

      if (title.length == 0) {
        books = models.Book.findAll({
          raw: true,
        });
      } else {
        books = models.Book.findAll({
          raw: true,
          where: [{ title: title }],
        });
      }

      books
        .then((result) => {
          callback(result);
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch(function (err) {
      console.error(err);
      console.log("✗ DB 연결 에러");
    });
}

export function saveBook(book) {
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
}
