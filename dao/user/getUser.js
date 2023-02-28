const models = require("../../models");

function getUser(deviceId, callback) {
  models.sequelize
    .sync()
    .then(() => {
      const books = models.User.findAll({
        raw: true,
        where: [{ deviceId: deviceId }],
      });

      books
        .then((result) => {
          callback(result);
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((err) => {
      console.error(err);
      console.log("✗ DB 연결 에러");
    });
}

module.exports = getUser;
