const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

module.exports = function loadBook(page, size, callback) {
  const headers = { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36' }
  axios({
    url: 'https://www.aladin.co.kr/shop/common/wbest.aspx?BranchType=1',
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
        const title = $(elem).find('table > tbody > tr > td:nth-child(3) > table > tbody > tr:nth-child(1) > td:nth-child(1) > div:nth-child(1) > ul > li:nth-child(2) > a > b').text();
        const rank = i
        const image_url = $(elem).find('table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(1) > td > div > a > div > div > img.front_cover').attr('src');
        const writer = $(elem).find('table > tbody > tr > td:nth-child(3) > table > tbody > tr:nth-child(1) > td:nth-child(1) > div:nth-child(1) > ul > li:nth-child(3) > a:nth-child(1)').text();
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
