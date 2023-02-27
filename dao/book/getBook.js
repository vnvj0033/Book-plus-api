const models = require("../../models");

function getBook(title, callback) {
  models.sequelize
    .sync()
    .then(() => {
      const books = models.Book.findAll({
        raw: true,
        where: [{ title: title }],
      });

      books
        .then((result) => {
          callback(result);
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((err) => {
      console.error(err);
      console.log("✗ DB 연결 에러");
    });
}

module.exports = getBook;
