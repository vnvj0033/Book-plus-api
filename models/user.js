module.exports = function (sequelize, DataTypes) {
    const user = sequelize.define("User", {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nickName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return user;
};
