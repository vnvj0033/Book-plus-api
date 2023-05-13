const express = require("express");
const parser = require("./kyobo/parser.js");
const models = require("./");
// const bookDao = require("./dao/bookDao.ts");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/books", (req, res) => {
  const title = req.query.title;

  console.log('get books')
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


app.get("/subject", (req, res) => {
  console.log('get subject')
  console.log(req.query)

  const data = {
    subject: 'a',
    subject: 'b'
  }

  res.send(data)
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

  createBookDatabase()
});

function createBookDatabase() {
  // db를 초기화 한다.
  // kyobo books 가저오기
  // 
}

