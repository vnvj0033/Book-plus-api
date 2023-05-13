module.exports = function parserBook(element) {
  const book = {
    'img_url':"https://contents.kyobobook.co.kr/sih/fit-in/142x0/pdt/" + element.cmdtCode + ".jpg",
    'title':element.cmdtName,
    'wirter':element.chrcName,
    'publish':element.pbcmName,
    'summery':element.inbukCntt
  }
  return book
};
