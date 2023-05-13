const Book = require("../../../object/Book" )

module.exports = function parserBook(element) {
  const book = new Book(
    "https://contents.kyobobook.co.kr/sih/fit-in/142x0/pdt/" + element.cmdtCode + ".jpg",
    element.cmdtName,
    element.chrcName,
    element.pbcmName,
    element.inbukCntt
  )
  return book
};
