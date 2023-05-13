module.exports = function (sequelize, DataTypes) {
  const user = sequelize.define("User", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    nickName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return user;
};
