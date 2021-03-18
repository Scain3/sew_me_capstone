'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Fabrics', [
      {
        type: 'sateen',
        color: 'navy',
        price: 10.97,
        image: 'https://images-na.ssl-images-amazon.com/images/I/813yRy1XisL._AC_SY450_.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'sateen',
        color: 'mint',
        price: 11.33,
        image: 'https://m.media-amazon.com/images/I/71jMq5i88LL._AC_SY450_.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'wool',
        color: 'black',
        price: 7.38,
        image: 'https://images-na.ssl-images-amazon.com/images/I/A1DzIxVtazL._AC_SY450_.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'cotton',
        color: 'blue',
        price: 5.99,
        image: 'https://images-na.ssl-images-amazon.com/images/I/81PWWENdo3L._AC_SX342_.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'cotton',
        color: 'white',
        price: 5.99,
        image: 'https://m.media-amazon.com/images/I/81SNq42v7RL._AC_SX342_.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'cotton',
        color: 'crimson',
        price: 9.99,
        image: 'https://m.media-amazon.com/images/I/81l8qQbU6FL._AC_SX342_.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'corduroy',
        color: 'grey',
        price: 22.68,
        image: 'https://images-na.ssl-images-amazon.com/images/I/A1Jd6fQa1iL._AC_SY450_.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'corduroy',
        color: 'khaki',
        price: 21.03,
        image: 'https://m.media-amazon.com/images/I/51xGR+Ru+RL._AC_SY450_.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'corduroy',
        color: 'Fresh Dew',
        price: 13.16,
        image: 'https://images-na.ssl-images-amazon.com/images/I/91Cu5ZBUqyL._AC_SY450_.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'denim',
        color: 'blue',
        price: 11.79,
        image: 'https://images-na.ssl-images-amazon.com/images/I/81mXuf1hmRL._AC_SY450_.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'cotton',
        color: 'black',
        price: 6.01,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61LvZk%2Bk%2BHL._AC_SX425_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'cotton',
        color: 'ivory',
        price: 6.35,
        image: 'https://images-na.ssl-images-amazon.com/images/I/91ZHUFNge3L._AC_SX425_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'cotton',
        color: 'leopard',
        price: 12.99,
        image: 'https://images-na.ssl-images-amazon.com/images/I/81h9IO7YK2L._AC_SX569_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'cotton',
        color: 'red',
        price: 6.35,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51paRt0SLiL._AC_SX425_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'cotton',
        color: 'red sugar skulls',
        price: 4.99,
        image: 'https://images-na.ssl-images-amazon.com/images/I/71oyL-TqlqL._AC_SX425_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'silk',
        color: 'dark violet',
        price: 24.99,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51-vbdjHaNL._AC_SX425_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'silk',
        color: 'white',
        price: 23.99,
        image: 'https://m.media-amazon.com/images/I/51l5S64sF4L._AC_SX425_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'silk',
        color: 'cream',
        price: 24.99,
        image: 'https://m.media-amazon.com/images/I/61780OL57NL._AC_SX425_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'silk',
        color: 'icy morn',
        price: 24.99,
        image: 'https://m.media-amazon.com/images/I/61x7Vk44WrL._AC_SX425_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'silk',
        color: 'tango red',
        price: 24.99,
        image: 'https://m.media-amazon.com/images/I/61DAjmiA38L._AC_SX425_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'chiffon',
        color: 'pink blush',
        price: 39.90,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51HCqat-Q5L._AC_SX425_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'chiffon',
        color: 'black',
        price: 39.90,
        image: 'https://m.media-amazon.com/images/I/51ej-X16OlL._AC_SX425_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'chiffon',
        color: 'dark coral',
        price: 37.47,
        image: 'https://m.media-amazon.com/images/I/517fGvP361L._AC_SX425_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'chiffon',
        color: 'lilac',
        price: 39.90,
        image: 'https://m.media-amazon.com/images/I/51YAb8Yrc9L._AC_SX425_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'chiffon',
        color: 'light grey',
        price: 39.90,
        image: 'https://m.media-amazon.com/images/I/51YAb8Yrc9L._AC_SX425_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }

], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Fabrics', null, {});

  }
};
