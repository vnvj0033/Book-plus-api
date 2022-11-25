const kyobo = require("./kyobo/loadBook.js");
const parser = require("./kyobo/parser.js");
const models = require("./models");
const express = require("express");
const findBook = require("./dao/book/findBook.ts");


// app.get("/books", (req, res) => {
//   const books = findBook("트렌드 코리아 2023")
// });

// app.listen(5000);


findBook("트렌드 코리아 2023")


function start() {
  kyobo("1", "1")
    .then((response) => {
      const data = response.data;
      data.data.bestSeller.forEach((element) => {
        const book = parser(element);

        models.Book.create({
          title: book.title,
          rank: book.rank,
          imageUrl: book.imageUrl,
          wirter: book.wirter,
          publisher: book.publisher,
          summary: book.summary
        })

        console.log(book.title + " 저장 성공");
      });
    })
    .catch((error) => {
      console.error(error);
    });


  models.User.create({
    deviceId: "deviceId",
    bookTitle: "bookTitle"
  })
}


