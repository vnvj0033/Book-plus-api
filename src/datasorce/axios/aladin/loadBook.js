const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');
const genres = require("./gener")

module.exports = function loadBook(page, size, genre, callback) {

  const cid = genres.filter(data => {
    return data.name == genre
  })[0].code

  axios({
    url: 'https://www.aladin.co.kr/shop/common/wbest.aspx?BestType=Bestseller&BranchType=1&' + "CID=" + cid,
    method: 'GET',
    responseType: 'arraybuffer'
  }).then(response => {
    const $ = cheerio.load(response.data);

    const list = new Array
    // 1위~40위까지의 책들에 대한 selector
    const booksSelector = '#Myform > div';
    const startPage = page * size - size

    $(booksSelector).each((i, elem) => {
      if (startPage + 1 <= i && i <= size + startPage) {
        let title = $(elem).find('table > tbody > tr > td:nth-child(3) > table > tbody > tr:nth-child(1) > td:nth-child(1) > div:nth-child(1) > ul > li:nth-child(2) > a > b').text();
        if (title == '') {
          title = $(elem).find('table > tbody > tr > td:nth-child(3) > table > tbody > tr:nth-child(1) > td:nth-child(1) > div:nth-child(1) > ul > li:nth-child(1) > a > b').text();
        }
        const rank = i
        const image_url = $(elem).find('table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(1) > td > div > a > div > div > img.front_cover').attr('src');
        let writer = $(elem).find('table > tbody > tr > td:nth-child(3) > table > tbody > tr:nth-child(1) > td:nth-child(1) > div:nth-child(1) > ul > li:nth-child(3) > a:nth-child(1)').text();
        if (writer == '') {
          writer = $(elem).find('table > tbody > tr > td:nth-child(3) > table > tbody > tr:nth-child(1) > td:nth-child(1) > div:nth-child(1) > ul > li:nth-child(2) > a:nth-child(1)').text();
        }
        const publisher = $(elem).find('table > tbody > tr > td:nth-child(3) > table > tbody > tr:nth-child(1) > td:nth-child(1) > div:nth-child(1) > ul > li:nth-child(3) > a:nth-child(3)').text();
        const summary = ""
        list.push({
          'platform': 'aladin',
          'rank': rank,
          'title': title,
          'image_url': image_url,
          'writer': writer,
          'publisher': publisher,
          'summary': summary
        })
      }
    });

    callback(list)
  }).catch(err => {
    console.error(err);
  });
}
