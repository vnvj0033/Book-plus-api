module.exports = function parserBook(element) {
  const book = {
    'platform':'kyobo',
    'rank':element.prstRnkn,
    'title':element.cmdtName,
    'image_url':"https://contents.kyobobook.co.kr/sih/fit-in/142x0/pdt/" + element.cmdtCode + ".jpg",
    'writer':element.chrcName,
    'publisher':element.pbcmName,
    'summary':element.inbukCntt
  }
  return book
};
