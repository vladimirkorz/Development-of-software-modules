import { sequelize, Category, Article } from './models/index.js';

async function seed() {

  await sequelize.sync({ force: true });
  console.log('Таблицы созданы');

  const sport = await Category.create({ name: 'Спорт' });
  const tech = await Category.create({ name: 'Технологии' });

  await Article.bulkCreate([
    { title: 'Матч века', content: 'Финал сезона', categoryId: sport.id },
    { title: 'Олимпиада 2026', content: 'Итоги', categoryId: sport.id },
    { title: 'Новый iPhone', content: 'Обзор', categoryId: tech.id },
    { title: 'ИИ в браузере', content: 'Тренды', categoryId: tech.id },
  ]);

  console.log('Добавлено 4 статьи в 2 категории');
  await sequelize.close();
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});