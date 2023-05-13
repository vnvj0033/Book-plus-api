const parser = require("./datasorce/axios/kyobo/parser");
const loadBook = require("./datasorce/axios/kyobo/loadBook")

loadBook("1", "20", (response) => {
    response.forEach( element => {
        const book = parser(element);
        console.log(book)
    });
})