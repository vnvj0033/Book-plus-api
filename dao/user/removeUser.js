const models = require("../../models");

function removeUser(callback) {
    models.sequelize
        .sync()
        .then(() => {
            const user = models.User.destroy({
                where: {},
                raw: true
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

module.exports = removeUser;
