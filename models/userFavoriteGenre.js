module.exports = function (sequelize, DataTypes) {
  const userFavoriteGenre = sequelize.define("UserFavoriteGenre", {
    deviceId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gener: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return userFavoriteGenre;
};
