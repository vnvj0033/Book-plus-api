module.exports = function (sequelize, DataTypes) {
    const user = sequelize.define("User", {
        deviceId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bookTitle: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return user;
};
