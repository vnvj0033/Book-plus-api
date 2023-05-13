const models = require("../models");

class UserDao {
  model = models.User;

  add(user) {
    this.model
      .create({
        id: user.id,
        nick_name: user.nickName,
      })
      .catch((err) => {
        console.error(err);
        console.log("✗ DB 연결 에러");
      });
  }

  get(id, callback) {
    this.model
      .findAll({
        raw: true,
        where: [{ id: id }],
      })
      .then((result) => {
        callback(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  removeAll(callback) {
    this.model
      .destroy({
        where: {},
        raw: true,
      })
      .then((result) => {
        callback(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

module.exports = UserDao;
