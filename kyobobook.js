const axios = require("axios");

const page = "1";
const per = "20";
const period = "002";
const bsslBksClstCode = "A";

const http = () => {
  const baseUrl =
    "https://product.kyobobook.co.kr/api/gw/pub/pdt/best-seller/total?" +
    "page=" +
    page +
    "&per=" +
    per +
    "&period=" +
    period +
    "&bsslBksClstCode=" +
    bsslBksClstCode;

  console.log(baseUrl);
  try {
    return axios.get(baseUrl);
  } catch (error) {
    console.error(error);
  }
};

http()
  .then((response) => {
    const data = response.data;

    data.data.bestSeller.forEach((element) => {
      const book = {
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

      const json = JSON.stringify(book);

      console.log(json);
    });
  })
  .catch((error) => {
    console.error(error);
  });
