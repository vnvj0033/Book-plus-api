module.exports = function (sequelize, DataTypes) {
  const book = sequelize.define("Book", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    writer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publisher: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return book;
};

// rank: element.prstRnkn,
// imageUrl: "https://contents.kyobobook.co.kr/sih/fit-in/142x0/pdt/${element.cmdtCode}.jpg",
// title: element.cmdtName,
// writer: element.chrcName,
// publisher: element.pbcmName,
// summary: element.inbukCntt,
