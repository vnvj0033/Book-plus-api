const cron = require("node-cron");
const kyobo = require("../datasorce/axios/kyobo/loadBook");

exports = function startCron() {
  const task = cron.schedule(
    "0 0 0 * *",
    function () {
      console.log("매 시 마다 작업 실행");
      start();
    },
    {
      scheduled: false,
    }
  );

  task.start();
};

function start() {
  kyobo("1", "1").then((response) => {
      const data = response.data;
      data.data.bestSeller.forEach((element) => {
        const book = parser(element);

        models.Book.create({
          title: book.title,
          rank: book.rank,
          imageUrl: book.imageUrl,
          wirter: book.wirter,
          publisher: book.publisher,
          summary: book.summary,
        });

        console.log(book.title + " 저장 성공");
      });
    })
    .catch((error) => {
      console.error(error);
    });

  models.User.create({
    deviceId: "deviceId",
    bookTitle: "bookTitle",
  });
}
