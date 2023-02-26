const add = require("./dao/book/addBook.js")
const getAll = require("./dao/book/getAllBook.js")


add({
    "title": "1번 title",
    "rank": "2번 rank",
    "imageUrl": "3번 imageUrl",
    "wirter": "4번 wirter",
    "publisher": "5번 publisher",
    "summary": "6번 summary"
})

getAll((data) => {
    console.log(data)
})