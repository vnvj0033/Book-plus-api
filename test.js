const parser = require("./datasorce/axios/kyobo/parser");
const loadBook = require("./datasorce/axios/kyobo/loadBook")

loadBook("1", "1").then((response) => {
    const data = response.data;
    data.data.bestSeller.forEach((element) => {
      const book = parser(element);

      console.log(book)
    })
})