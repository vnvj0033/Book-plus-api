const BookDao = require("./dao/bookDao.js");

const bookDao = new BookDao();

bookDao.getAll((result) => console.log(result));
