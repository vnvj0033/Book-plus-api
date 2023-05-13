const axios = require("axios");

module.exports = function loadBook(page, size, callback) {
  const period = "002";
  const bsslBksClstCode = "A";

  const baseUrl = "https://product.kyobobook.co.kr/api/gw/pub/pdt/best-seller/total";
  const headers = { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36' }


  axios
    .get(baseUrl, {
      headers,
      params: {
        page: page,
        per: size,
        period: period,
        bsslBksClstCode: bsslBksClstCode,
      },
    })
    .then((response) => {
      callback(response.data.data.bestSeller)
    })

};
