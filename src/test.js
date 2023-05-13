const parser = require("./datasorce/axios/kyobo/parser");
const loadBook = require("./datasorce/axios/kyobo/loadBook")
const bookNetLoader = require("./datasorce/axios/bookNetLoader")
const bookDao = require("./datasorce/dao/bookDao")
const models = require("./datasorce/models")

const bookLoader = new bookNetLoader()
const dao = new bookDao()


models.sequelize.sync({ force: true }).then(() => {
bookLoader.loadBooksForPlatform('kyobo', 1, (books) => {
        dao.saveBooksForDB('kyobo', books)
    })
})