const express = require("express");
const parser = require("./kyobo/parser.js");
const models = require("./models");
// const bookDao = require("./dao/bookDao.ts");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/books", (req, res) => {
  const title = req.query.title;

  console.log('get book')
  console.log(req.query)

  let data = [
    {
      title: 'title1',
      wirter: 'wirter1',
      summary: 'this is book of bookplus test wow!'
    },
    {
      title: 'title2',
      wirter: 'wirter2',
      summary: 'this is book of bookplus test wow! 22'
    },
    {
      title: 'title3',
      wirter: 'wirter3',
      summary: 'this is book of bookplus test wow! 33'
    },
  ]

  res.send(data)
  // bookDao.findBook(title, (books) => {
  //   res.send({ books });
  // });
});


app.post("/books", (req, res) => {

  console.log('post book')
  console.log(req.body)

  res.send('ok')

  // const books = req.body.books;

  // books.forEach((book) => {
  //   bookDao.saveBook(book);
  // });
  // res.send({ result: "ok" });
});

app.listen(3000, () => {
  console.log("서버를 시작합니다.");
});

