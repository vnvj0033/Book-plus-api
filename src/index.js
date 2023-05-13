const express = require("express");
const bookDao = require("./datasorce/dao/bookDao")
const bookNetLoader = require("./datasorce/axios/bookNetLoader")
const models = require("./datasorce/models")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/books", (req, res) => {
  console.log('call get books')
  console.log('query : ${req.query}')

  const { platform } = req.query;

  const dao = new bookDao()
  dao.getAll((books) => {
    res.send(books)
  })
});

app.listen(3000, () => {

  console.log("서버를 시작합니다.");
  createBookDatabase()
});


function createBookDatabase() {
  const dao = new bookDao()
  const bookLoader = new bookNetLoader()

  const platforms = ['kyobo']

  models.sequelize.sync({ force: true }).then(() => {
    dao.removeAll(() => {
      bookLoader.loadBooksForPlatform('kyobo', 10, (books) => {
        dao.saveBooksForDB('kyobo', books)
      })
    })
  })
}

