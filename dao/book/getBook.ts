const models = require("models");

export function getBook(title, callback) {
  if (title == undefined) {
    title = "";
  }

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
    .catch(function (err) {
      console.error(err);
      console.log("✗ DB 연결 에러");
    });
}