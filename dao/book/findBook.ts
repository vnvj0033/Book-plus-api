export { };
const book = require("../../models/book");
const models = require("../../models");


module.exports = function findBookInDB(title, callback) {
    if (title == undefined) {
        title = ""
    }

    models.sequelize
        .sync()
        .then(() => {
            console.log("✓ DB 연결 성공");

            let books;

            if (title.length == 0) {
                books = models.Book.findAll({
                    raw: true
                })

            } else {
                books = models.Book.findAll({
                    raw: true,
                    where: [{ title: title }],
                });
            }

            books.then((result) => {
                callback(result)
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