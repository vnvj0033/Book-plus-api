const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

module.exports = function loadBook(page, size, callback) {
  const period = "002";
  const bsslBksClstCode = "A";


  const headers = { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36' }
  axios({
    url: 'http://www.yes24.com/24/Category/BestSeller',
    method: 'GET',
    responseType: 'arraybuffer'
  }).then(response => {
    const content = iconv.decode(response.data, 'EUC-KR');
    const $ = cheerio.load(content);

    // 1위~40위까지의 책들에 대한 selector
    const booksSelector = '#bestList > ol > li';
    $(booksSelector).each((i, elem) => {
        const title = $(elem).find('p:nth-child(3) > a').text();
        const description = $(elem).find('p.copy > a').text();
        const price = $(elem).find('p.price > strong').text();
        const imgUrl = $(elem).find('p.image > a > img').attr('src');
        console.log(i + 1, {
            title,
            description,
            price,
            imgUrl,
        });
    });
  }).catch(err => {
    console.error(err);
  });

}
