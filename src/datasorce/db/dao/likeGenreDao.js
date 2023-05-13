const models = require("../models");

class LikeGenreDao {
  model = models.LikeGenre;

  add(likeGenre) {
    this.model
      .create({
        id: likeGenre.id,
        platform: likeGenre.platform,
        genre: likeGenre.genre
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

  removeForId(id) {
    this.model
      .destroy({
        where: { id: id },
        raw: true,
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
