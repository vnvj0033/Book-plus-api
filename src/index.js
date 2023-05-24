const express = require("express");
const bookDao = require("./datasorce/dao/bookDao")
const bookNetLoader = require("./datasorce/axios/bookNetLoader")
const models = require("./datasorce/models")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/books", (req, res) => {
  const { platform } = req.query;

  const dao = new bookDao()
  dao.getWithPlatform(platform, (books) => {
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

  const platforms = ['kyobo', 'yes24', 'aladin']
  models.sequelize.sync({ force: true }).then(() => {
    dao.removeAll(() => {
      platforms.forEach(platform => {
        bookLoader.loadBooksForPlatform(platform, 20, (books) => {
          dao.saveBooksForDB(books)
        })
      })
    })
  });
}

