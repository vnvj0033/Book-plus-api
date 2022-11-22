module.exports = function parserBook(element) {
  return {
    rank: element.prstRnkn,
    imageUrl:
      "https://contents.kyobobook.co.kr/sih/fit-in/142x0/pdt/" +
      element.cmdtCode +
      ".jpg",
    title: element.cmdtName,
    wirter: element.chrcName,
    publisher: element.pbcmName,
    summary: element.inbukCntt,
  };
};
