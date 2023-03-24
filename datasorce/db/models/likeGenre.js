module.exports = function (sequelize, DataTypes) {
  const userFavoriteGenre = sequelize.define("LikeGenre", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return userFavoriteGenre;
};
