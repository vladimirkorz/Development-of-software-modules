import { Sequelize } from 'sequelize';
import categoryDef from './Category.js';
import articleDef from './Article.js';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false,
});

const Category = categoryDef(sequelize);
const Article = articleDef(sequelize);

Category.hasMany(Article, { foreignKey: 'categoryId' });
Article.belongsTo(Category, { foreignKey: 'categoryId' });

export { sequelize, Category, Article };