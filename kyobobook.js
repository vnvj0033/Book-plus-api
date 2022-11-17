const axios = require("axios");

const http = () => {
  try {
    return axios.get(
      "https://product.kyobobook.co.kr/api/gw/pub/pdt/best-seller/total?page=1&per=20&period=002&bsslBksClstCode=A"
    );
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
        imageUrl: "https://contents.kyobobook.co.kr/sih/fit-in/142x0/pdt/" + element.cmdtCode + ".jpg",
        title: element.cmdtName,
        wirter: element.chrcName,
        publisher: element.pbcmName,
        summary: element.inbukCntt
      }

      console.log(book);
    });
  })
  .catch((error) => {
    console.error(error);
  });
