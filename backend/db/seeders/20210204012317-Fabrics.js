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
      }

], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Fabrics', null, {});

  }
};
