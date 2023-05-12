const axios = require("axios");

module.exports = function loadBook(page, size, callback) {
  const period = "002";
  const bsslBksClstCode = "A";

  const baseUrl =
    "https://product.kyobobook.co.kr/api/gw/pub/pdt/best-seller/total";

  axios
    .get(baseUrl, {
      params: {
        page: page,
        per: size,
        period: period,
        bsslBksClstCode: bsslBksClstCode,
      },
    })
    .then((response) => {
      console.log(response)
      callback(response.data.data.bestSeller)

    })

};
