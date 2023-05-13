const parser = require("./datasorce/axios/kyobo/parser");
const loadBook = require("./datasorce/axios/kyobo/loadBook")
const yes24BookLoader = require("./datasorce/axios/yes24/loadBook")
const bookNetLoader = require("./datasorce/axios/bookNetLoader")
const bookDao = require("./datasorce/dao/bookDao")
const models = require("./datasorce/models")

const bookLoader = new bookNetLoader()
const dao = new bookDao()


yes24BookLoader()