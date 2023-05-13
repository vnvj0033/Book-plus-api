const express = require("express");
const bookDao = require("./datasorce/dao/bookDao")
const bookNetLoader = require("./datasorce/axios/bookNetLoader")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/books", (req, res) => {
  console.log('call get books')
  console.log('query : ${req.query}')

  const { platform } = req.query;
  
  const books = loadBooksForDB(platform)
  res.send(books)
});

app.listen(3000, () => {
  console.log("서버를 시작합니다.");

  createBookDatabase()
});


function createBookDatabase() {
  const platforms = ['kyobo', 'yes24', 'aladin']

  bookDao.getAll( books => {
    console.log(books)
  })
  bookDao.removeAll()
  bookDao.getAll( books => {
    console.log(books)
  })

  platforms.forEach( platform => {
    const books = bookNetLoader.loadBooksForPlatform(platform, 20)
    bookDao.saveBooksForDB(platform, books)
    bookDao.getAll( books => {
      console.log(books)
    })
  })
}

