const add = require("./dao/book/addBook.js")
const getAll = require("./dao/book/getAllBook.js")


add({
    title: "book.title",
    rank: "book.rank",
    imageUrl: "book.imageUrl",
    wirter: "book.wirter",
    publisher: "book.publisher",
    summary: "book.summary"
})

getAll((data) => {
    console.log(data)
})