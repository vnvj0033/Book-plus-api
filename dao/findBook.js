const book = require("../models/book");
const models = require("../models");




module.exports = function findBookInDB(bookTitle) {
    models.sequelize
        .sync()
        .then(() => {
            console.log("✓ DB 연결 성공");

            const books = models.Book.findAll({
                raw: true,
                where: [{ title: bookTitle }],
            });

            books.then((result) => {
                console.log("BOOKS : ", result);
            })
                .catch((error) => {
                    console.error(error);
                });
        })
        .catch(function (err) {
            console.error(err);
            console.log("✗ DB 연결 에러");
            return 0;
        });
}