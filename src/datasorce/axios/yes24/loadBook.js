const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");
const genres = require("./gener");

module.exports = function loadBook(page, size, genre, callback) {
  const code = genres.filter((data) => {
    return data.name == genre;
  })[0].code;

  axios({
    url: "http://www.yes24.com/24/category/bestSeller?CategoryNumber=" + code,
    method: "GET",
    responseType: "arraybuffer",
  })
    .then((response) => {
      const content = iconv.decode(response.data, "EUC-KR");
      const $ = cheerio.load(content);

      const list = new Array();
      // 1위~40위까지의 책들에 대한 selector
      const startPage = page * size - size;

      const booksSelector = "#category_layout > tbody > tr";
      $(booksSelector).each((i, elem) => {
        if (startPage <= i && i <= 2 * (size + startPage - 1) && i % 2 == 0) {
          const title = $(elem)
            .find("td.goodsTxtInfo > p:nth-child(1) > a:nth-child(1)")
            .text();
          const rank = i + 1 - i / 2;
          const image_url = $(elem)
            .find("td.image > div > a:nth-child(1) > img")
            .attr("src");
          const writer = $(elem)
            .find("td.goodsTxtInfo > div > a:nth-child(1)")
            .text();
          const publisher = $(elem)
            .find("td.goodsTxtInfo > div > a:nth-child(2)")
            .text();
          const summary = $(elem).find("td:nth-child(2) > p").text();
          list.push({
            platform: "yes24",
            rank: rank,
            title: title,
            image_url: image_url,
            writer: writer,
            publisher: publisher,
            summary: summary,
          });
        }
      });

      callback(list);
    })
    .catch((err) => {
      console.error(err);
    });
};
