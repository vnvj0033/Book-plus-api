module.exports = function parserBook(element) {
  const book = {
    'rank':element.prstRnkn,
    'title':element.cmdtName,
    'imgUrl':"https://contents.kyobobook.co.kr/sih/fit-in/142x0/pdt/" + element.cmdtCode + ".jpg",
    'writer':element.chrcName,
    'publisher':element.pbcmName,
    'summary':element.inbukCntt
  }
  return book
};
