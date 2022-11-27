export { };
const book = require("../../models/book");
const models = require("../../models");


module.exports = function saveBook(book, callback) {

    models.Book.create({
        title: book.title,
        rank: book.rank,
        imageUrl: book.imageUrl,
        wirter: book.wirter,
        publisher: book.publisher,
        summary: book.summary
    })
        .catch((error) => {
            callback(false)
            console.error(error);
        });

    callback(true)
}
