const kyobo = require("./kyobo/loadBook.js");
const parser = require("./kyobo/parser.js");

kyobo("1", "1")
  .then((response) => {
    const data = response.data;
    data.data.bestSeller.forEach((element) => {
      const book = parser(element);

      console.log(book);
    });
  })
  .catch((error) => {
    console.error(error);
  });
