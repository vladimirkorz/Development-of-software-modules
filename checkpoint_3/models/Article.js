import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const Article = sequelize.define('Article', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Article;
}