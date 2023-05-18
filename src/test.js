const parser = require("./datasorce/axios/kyobo/parser");
const loadBook = require("./datasorce/axios/kyobo/loadBook")
const bookNetLoader = require("./datasorce/axios/bookNetLoader")
const yes24BookLoader = require("./datasorce/axios/yes24/loadBook")
const koyboBookLoader = require("./datasorce/axios/kyobo/loadBook")
const bookDao = require("./datasorce/dao/bookDao")
const models = require("./datasorce/models")

const bookLoader = new bookNetLoader()
const dao = new bookDao()


koyboBookLoader("1", "20",  (list) => {
    console.log(list)
})