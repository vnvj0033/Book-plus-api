module.exports = function (sequelize, DataTypes) {
  const book = sequelize.define("Book", {
    platform: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_url: {
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
// image_url: "https://contents.kyobobook.co.kr/sih/fit-in/142x0/pdt/${element.cmdtCode}.jpg",
// title: element.cmdtName,
// writer: element.chrcName,
// publisher: element.pbcmName,
// summary: element.inbukCntt,
