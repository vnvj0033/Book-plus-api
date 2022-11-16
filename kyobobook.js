// {
//     prstRnkn: 1,
//     imgPath: null,
//     recdCode: null,
//     saleCmdtid: 'S000061863239',
//     saleCmdtGrpDvsnCode: 'SGK',
//     cmdtName: '트렌드 코리아 2023',
//     chrcName: '김난도 외',
//     pbcmName: '미래의창',
//     ppbkRlseDate: null,
//     rlseDate: '20221005',
//     inbukCntt: '세계화의 종말, 갈등과 분열, 그리고 전쟁. 수십 년간...',
//     price: 19000,
//     sapr: 17100,
//     dscnRate: 10,
//     upntAcmlAmnt: 950,
//     buyRevwNumc: 1052,
//     buyRevwRvgr: 9.31,
//     revwEmtnKywrName: '도움돼요',
//     frmrRnkn: 1,
//     preview: true,
//     likeWhether: false,
//     saleCmdtDvsnCode: 'KOR',
//     saleCmdtPrceCurnUntCode: null,
//     saleCmdtClstCode: '130911',
//     saleCmdtClstName: '경제전망',
//     saleCdtnCode: '001',
//     cmdtCdtnCode: '001',
//     cmdtCode: '9788959897094',
//     saleLmttAge: 0,
//     ymw: '2022111',
//     total: 200,
//     rowNum: 1,
//     productInfo: {
//       saleCmdtid: null,
//       like: true,
//       basket: true,
//       buy: true,
//       direct: false,
//       viewDetails: false,
//       sticky: null,
//       reStockOnOff: true,
//       releaseOnOff: true,
//       shippingCode: '002',
//       shippingText: '<strong class=blue>11월 16일 출고예정</strong>',
//       shippingKind: null,
//       todayBook: true,
//       todayBookLabel: '2022년 10월 11일 오늘의 책',
//       mdChoice: true,
//       specialOrder: false,
//       onlyKyobo: false,
//       limitSale: false,
//       gifts: true,
//       event: true,
//       incomeDeduction: true,
//       fixPrice: false,
//       bind: false,
//       cutPrice: false
//     }
//   }

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
      const rank = element.prstRnkn;
      const title = element.cmdtName;
      const wirter = element.chrcName;
      const publisher = element.pbcmName;
      const summary = element.inbukCntt;
      console.log(element);
    });
  })
  .catch((error) => {
    console.error(error);
  });
