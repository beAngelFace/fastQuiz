'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Items', [{
      title: 'Game',
      foto: 'https://s0.rbk.ru/v6_top_pics/media/img/8/03/756263441363038.jpg'
     },
     {
      title: 'Special',
      foto: 'https://balakovo24.ru/b24/uploads/2023/06/%D0%BA%D0%B8%D0%BD%D0%BE.jpg'
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Item', null, {});
     
  }
};
