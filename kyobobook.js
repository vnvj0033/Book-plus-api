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

http().then((response) => {
  const data = response.data;

  console.log(data.data.bestSeller);
});
