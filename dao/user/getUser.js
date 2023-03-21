const models = require("../../models");

function getUser(id, callback) {
  models.sequelize
    .sync()
    .then(() => {
      const user = models.User.findAll({
        raw: true,
        where: [{ id: id }],
      });

      user
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
