'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Datas', [
      //угадай игру
      {
        titleId: '1',
        question: 'Quuke 4, Halo, Doom 4, Wolfenstein?',
        answer: 'Doom 4',
        images: 'https://pikuco.ru/upload/test_stable/951/95149afdabf0819a1148a48bfa5fa300.webp',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        titleId: '1',
        question: 'Far Cry 3, BioShock Infinite, Max Payne 3, Grand Theft Auto V?',
        answer: 'Grand Theft Auto V',
        images: 'https://pikuco.ru/upload/test_stable/d75/d7512eb1e064aa9fec5a79ea7ffcd4fc.webp',
        createdAt: new Date(),
        updatedAt: new Date()
       },{
    titleId: '1',
    question: 'Dragon Age: Origins, Gothic 4, The Elder Scrolls V:Skyrim, The Witcher?',
    answer: 'The Elder Scrolls V:Skyrim',
    images: 'https://pikuco.ru/upload/test_stable/992/992316fa9c12fb44c7ae429890b8def6.webp',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    titleId: '1',
    question: 'Fortnite, PUBG, Tom Clancy`s Rainbow Six:Siege, DayZ?',
    answer: 'Fortnite',
    images: 'https://pikuco.ru/upload/test_stable/0ee/0eea8b76bc9e1f7c6cbd9e9fd4b5b9df.webp',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    titleId: '1',
    question: 'Crysis 2, Battlefield 3, Lara Croft, Far Cry 3?',
    answer: 'Far Cry 3',
    images: 'https://pikuco.ru/upload/test_stable/ca5/ca5a84aac10e76a6bd8af28a9889df38.webp',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    titleId: '1',
    question: 'Dwarf Fortress, Копатель Онлайн, Terraria, Minecraft?',
    answer: 'Minecraft',
    images: 'https://pikuco.ru/upload/test_stable/bfc/bfc07829a7a5d9429457ff0c40856a06.webp',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    titleId: '1',
    question: 'The Sims 4, Spore, Warcraft III: Reign of Chaos, SimCity?',
    answer: 'The Sims 4',
    images: 'https://pikuco.ru/upload/test_stable/c7c/c7c5885ac12d41ee81275af84edbeb86.webp',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   // 'Угадай фильм со спины"
   {
    titleId: '2',
    question: 'Гладиатор, 300 спартанцев, Битва титанов?',
    answer: '300 спартанцев',
    images: 'https://pikuco.ru/upload/test_stable/ecf/ecf479f9d4f5ecf7e387dc7ca209c4cd.webp',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    titleId: '2',
    question: 'Социальная сеть, Нью-Йорк,Нью-Йорк, Бердмэн?',
    answer: 'Нью-Йорк,Нью-Йорк',
    images: 'https://pikuco.ru/upload/test_stable/7a8/7a83aac285c15e5ca18ca1258903c6d7.webp',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    titleId: '2',
    question: 'Мрачные тени, Алиса в Стране Чудес, Оз?',
    answer: 'Алиса в Стране Чудес',
    images: 'https://pikuco.ru/upload/test_stable/134/134c791b43ed663418901f0469e30085.webp',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    titleId: '2',
    question: 'Анна Каренина, Гамлет, Великий Гетсби?',
    answer: 'Гамлет',
    images: 'https://pikuco.ru/upload/test_stable/a05/a057ff16bdf7cffead9e06f7956ee4e6.webp',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    titleId: '2',
    question: 'Пекло, Интерстеллар, 2001 год: Космическая одиссея?',
    answer: 'Пекло',
    images: 'https://pikuco.ru/upload/test_stable/0c1/0c1a7d8205a4b36992bb7d388f206fa0.webp',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    titleId: '2',
    question: 'Черная орхидея, Секреты Лос-Анджелиса, Город Грехов?',
    answer: 'Город Грехов',
    images: 'https://pikuco.ru/upload/test_stable/d11/d116a570b207fdb6587f820c8e979651.webp',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    titleId: '2',
    question: '5 элемент, Стражи галактики, Автостопом по галактике?',
    answer: '5 элемент',
    images: 'https://pikuco.ru/upload/test_stable/23b/23b443c2970a56f0a9d69f66e20dd392.webp',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   
   
   

  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Data', null, {});
     
  }
};
