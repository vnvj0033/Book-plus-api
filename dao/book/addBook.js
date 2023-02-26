const models = require('../../models')

function addBook(book) {
    models.Book.create({
        title: book.title,
        rank: book.rank,
        imageUrl: book.imageUrl,
        wirter: book.wirter,
        publisher: book.publisher,
        summary: book.summary,
    }).catch((err) => {
        console.error(err);
        console.log("✗ DB 연결 에러");
    });
}

module.exports = addBook