const loadBook = require("./datasorce/axios/kyobo/loadBook")
const bookNetLoader = require("./datasorce/axios/bookNetLoader")
const yes24BookLoader = require("./datasorce/axios/yes24/loadBook")
const koyboBookLoader = require("./datasorce/axios/kyobo/loadBook")
const aladinBookLoader = require("./datasorce/axios/aladin/loadBook")
const bookDao = require("./datasorce/dao/bookDao")
const models = require("./datasorce/models")

const bookLoader = new bookNetLoader()
const dao = new bookDao()


yes24BookLoader(3, 1,  (list) => {
    console.log(list)
})