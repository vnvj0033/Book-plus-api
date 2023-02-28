module.exports = function (sequelize, DataTypes) {
    const user = sequelize.define("User", {
        deviceId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nickName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        representativeGenre: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return user;
};
