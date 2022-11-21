const axios = require("axios");

module.exports = function loadBookList(page, size) {
  const period = "002";
  const bsslBksClstCode = "A";

  const http = () => {
    const baseUrl =
      "https://product.kyobobook.co.kr/api/gw/pub/pdt/best-seller/total";

    try {
      return axios.get(baseUrl, {
        params: {
          page: page,
          per: size,
          period: period,
          bsslBksClstCode: bsslBksClstCode,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  http()
    .then((response) => {
      const data = response.data;
      data.data.bestSeller.forEach((element) => {
        const book = parserBook(element);

        const json = JSON.stringify(book);

        console.log(json);
      });
    })
    .catch((error) => {
      console.error(error);
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
