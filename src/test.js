const parser = require("./datasorce/axios/kyobo/parser");
const loadBook = require("./datasorce/axios/kyobo/loadBook")
const bookNetLoader = require("./datasorce/axios/bookNetLoader")
const bookDao = require("./datasorce/dao/bookDao")

const bookLoader = new bookNetLoader()
const dao = new bookDao()

const books = bookLoader.loadBooksForPlatform('kyobo', 1, (books) => {
    dao.saveBooksForDB('kyobo', books)
  })