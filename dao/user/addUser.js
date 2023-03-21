const models = require("../../models");

function addUser(user) {
  console.log("add user", user);

  models.User.create({
    id: user.id,
    nick_name: user.nickName
  }).catch((err) => {
    console.error(err);
    console.log("✗ DB 연결 에러");
  });
}

module.exports = addUser;
