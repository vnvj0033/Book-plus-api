const axios = require("axios");
const genres = require("./gener")

module.exports = function loadBook(page, size, genre, callback) {

  const bsslBksClstCode = genres.filter(data => {
    return data.name == genre
  })[0].code

  const period = "002";

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
      const books = response.data.data.bestSeller
      const list = new Array

      books.forEach(element => {
        const book = {
          'platform':'kyobo',
          'rank':element.prstRnkn,
          'title':element.cmdtName,
          'image_url':"https://contents.kyobobook.co.kr/sih/fit-in/142x0/pdt/" + element.cmdtCode + ".jpg",
          'writer':element.chrcName,
          'publisher':element.pbcmName,
          'summary':element.inbukCntt
        }
        list.push(book)
      });
      callback(list)
    })

};
