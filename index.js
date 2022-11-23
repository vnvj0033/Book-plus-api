const kyobo = require("./kyobo/loadBook.js");
const parser = require("./kyobo/parser.js");
const sql = require("./database/testdb.js");
const connection = sql.init();

sql.db_open(connection);

connection.query("SELECT * FROM  USERS", function (error, results, fields) {
  if (error) {
    console.log(error);
  }
  console.log(results);
});

// kyobo("1", "1")
//   .then((response) => {
//     const data = response.data;
//     data.data.bestSeller.forEach((element) => {
//       const book = parser(element);

//       console.log(book);
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });
