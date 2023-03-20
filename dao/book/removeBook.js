const models = require("../../models");

function removeBook(callback) {
    models.sequelize
        .sync()
        .then(() => {
            const books = models.Book.destroy({
                where: {},
                raw: true
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

module.exports = removeBook;
