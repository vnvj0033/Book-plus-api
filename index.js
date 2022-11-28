const express = require("express");
const kyobo = require("./kyobo/loadBook.js");
const parser = require("./kyobo/parser.js");
const models = require("./models");
const findBook = require("./dao/book/findBook.ts");
const saveBook = require("./dao/book/saveBook.ts");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/books", (req, res) => {
  const title = req.query.title;

  findBook(title, (books) => {
    res.send({ books });
  });
});

app.post("/books", (req, res) => {
  const books = req.body.books;

  books.forEach((book) => {
    saveBook(book);
  });
  res.send({ result: "ok" });
});

app.listen(3000, () => {
  console.log("서버를 시작합니다.");
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
          summary: book.summary,
        });

        console.log(book.title + " 저장 성공");
      });
    })
    .catch((error) => {
      console.error(error);
    });

  models.User.create({
    deviceId: "deviceId",
    bookTitle: "bookTitle",
  });
}
