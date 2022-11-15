const cheerio = require("cheerio");
const axios = require("axios");
const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(5000);

// #section_bestseller > ol > li:nth-child(1) > div > div > a > img 이미지
// #book_title_0 > a
// #section_bestseller > ol > li:nth-child(1) > div > div > a > img

const getHtml = async () => {
  try {
    return await axios.get(
      "https://book.naver.com/bestsell/bestseller_list.naver"
    );
  } catch (error) {
    console.error(error);
  }
};

getHtml().then((html) => {
  const $ = cheerio.load(html.data);

  const trElements = $("#book_title_0");

  // const insiderTradeData = trElements
  //   .map((index, tr) => ({
  //     date: $(tr).text(),
  //   }))
  //   .toArray();
  console.log($(trElements.get(0)).text());
});
