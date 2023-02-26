import models from "../../models";

export function getBook(title, callback) {
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
      callback(err)
    });
}