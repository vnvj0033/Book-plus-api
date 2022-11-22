const axios = require("axios");

module.exports = function loadBook(page, size) {
  const period = "002";
  const bsslBksClstCode = "A";

  const baseUrl =
    "https://product.kyobobook.co.kr/api/gw/pub/pdt/best-seller/total";

  return axios.get(baseUrl, {
    params: {
      page: page,
      per: size,
      period: period,
      bsslBksClstCode: bsslBksClstCode,
    },
  });
};

function parserBook(element) {
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
}
