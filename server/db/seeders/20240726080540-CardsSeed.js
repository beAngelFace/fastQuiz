'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Cards', [
      {
          quet: "Чем больше из нее берешь, тем больше она становится",
          answ: "яма",
          pic: "https://pikuco.ru/upload/test_stable/ffe/ffeecd1b37460f8ce4201ca86704b854.webp",
          catId: 1
      },
      {
          quet: "Какая птица яиц не несёт, но сама из яйца вылупилась?",
          answ: "петух",
          pic: "https://pikuco.ru/upload/test_stable/c90/c90e30c885097a8fd754cdfb2aa4e06f.webp",
          catId: 1
      },
      {
          quet: "Джордж Вашингтон, Шерлок Холмс, Уильям Шекспир, Людвиг ван Бетховен, Наполеон Бонапарт— кто лишний?",
          answ: "Шерлок Холмс",
          pic: "https://pikuco.ru/upload/test_stable/a4b/a4b2fbe51445c73da81ad904e646d8c7.webp",
          catId: 1
      },
      {
          quet: "Человек хочет, чтобы он включился. А когда он включается, человек злится и старается его выключить",
          answ: "будильник",
          pic: "https://pikuco.ru/upload/test_stable/b8c/b8cf117567f8bbd2c08c32ceafeae801.webp",
          catId: 1
      },
      {
          quet: "Он чёрный, когда его покупают, он красный, когда его используют, он серый, когда его выбрасывают",
          answ: "уголь",
          pic: "https://pikuco.ru/upload/test_stable/06b/06b98b05623222ef5987a2a5430feeb5.webp",
          catId: 1
      },
      {
          quet: "В каком слове пять «е» и никаких других гласных?",
          answ: "переселенец",
          pic: "https://pikuco.ru/upload/test_stable/773/773cad51afd041918a97f93d4dc0eb38.webp",
          catId: 1
      },
      {
          quet: "Это больше самого слона, но ничего не весит. Что это такое?",
          answ: "тень",
          pic: "https://pikuco.ru/upload/test_stable/546/546c8960a12fd89128f852a90a1006d3.webp",
          catId: 1
      },
      {
          quet: "Какого цвета верхняя половина логотипа PEPSI?",
          answ: "Красная",
          pic: "https://pikuco.ru/upload/test_stable/b4f/b4ff3a5febd2a7d109522bf15cf08383.webp",
          catId: 2
      },
      {
          quet: "Какие две буквы возглавляют таблицу проверки зрения?",
          answ: "Ш Б",
          pic: "https://pikuco.ru/upload/test_stable/a5d/a5d70345185a5541e0fdb6a0aec7f380.webp",
          catId: 2
      },
      {
          quet: "Что в кадре из фильма 'Операция 'Ы' и другие приключения Шурика' скрыто на столе?",
          answ: "Горчица",
          pic: "https://pikuco.ru/upload/test_stable/e8d/e8dd6478734a5e994b327bd79c6de700.webp",
          catId: 2
      },
      {
          quet: "В рекламе какого продукта участвовал данный котик?",
          answ: "Whiskas",
          pic: "https://pikuco.ru/upload/test_stable/c52/c5236cba7fbad0d36dca2c935fb56e5e.webp",
          catId: 2
      },
      {
          quet: "Какого цвета вторая буква О в логотипе Google?",
          answ: "Желтая",
          pic: "https://pikuco.ru/upload/test_stable/cfd/cfd3ad8cbe7e0c38e9b185ed632f6bc2.webp",
          catId: 2
      },
      {
          quet: "Кто изображен на стодолларовой банкноте?",
          answ: "Франклин",
          pic: "https://pikuco.ru/upload/test_stable/2ff/2ff3114baefae40d5d47e22ea7cc930c.webp",
          catId: 2
      },
      {
          quet: "Вспоминаем классику, кто или что скрывается в красно-синем подарке из 'Ну погоди'?",
          answ: "Волк",
          pic: "https://pikuco.ru/upload/test_stable/6c3/6c3972a467a28f21fd614ae6da21cfbe.webp",
          catId: 2
      }
  ]
  , {});
    
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.bulkDelete('Cards', {});
     
  }
};
