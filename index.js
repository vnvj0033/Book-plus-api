const express = require("express");
const parser = require("./kyobo/parser.js");
const models = require("./models");
const bookDao = require("./dao/bookDao.ts");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/books", (req, res) => {
  const title = req.query.title;

  bookDao.findBook(title, (books) => {
    res.send({ books });
  });
});

app.post("/books", (req, res) => {
  const books = req.body.books;

  books.forEach((book) => {
    bookDao.saveBook(book);
  });
  res.send({ result: "ok" });
});

app.listen(3000, () => {
  console.log("서버를 시작합니다.");
});

