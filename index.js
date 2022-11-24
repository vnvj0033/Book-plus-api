const kyobo = require("./kyobo/loadBook.js");
const parser = require("./kyobo/parser.js");
const models = require("./models");

models.sequelize
  .sync()
  .then(() => {
    console.log("✓ DB 연결 성공");
    start()
  })
  .catch(function (err) {
    console.error(err);
    console.log("✗ DB 연결 에러");
    process.exit();
  });


function start() {
  kyobo("1", "1")
    .then((response) => {
      const data = response.data;
      data.data.bestSeller.forEach((element) => {
        const book = parser(element);

        models.Book.create({
          title: book.title,
          rank: book.rank,
          imageUrl: book.imageUrl,
          wirter: book.wirter,
          publisher: book.publisher,
          summary: book.summary
        })

        console.log(book);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
