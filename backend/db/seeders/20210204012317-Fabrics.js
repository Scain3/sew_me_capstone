'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Fabrics', [
      {
        type: 'sateen',
        color: 'navy',
        price: 10.97,
        image: 'https://images-na.ssl-images-amazon.com/images/I/813yRy1XisL._AC_SY450_.jpg'
      },
      {
        type: 'sateen',
        color: 'mint',
        price: 11.33,
        image: 'https://m.media-amazon.com/images/I/71jMq5i88LL._AC_SY450_.jpg'
      },
      {
        type: 'wool',
        color: 'black',
        price: 7.38,
        image: 'https://images-na.ssl-images-amazon.com/images/I/A1DzIxVtazL._AC_SY450_.jpg'
      },
      {
        type: 'cotton',
        color: 'blue',
        price: 5.99,
        image: 'https://images-na.ssl-images-amazon.com/images/I/81PWWENdo3L._AC_SX342_.jpg'
      },
      {
        type: 'cotton',
        color: 'white',
        price: 5.99,
        image: 'https://m.media-amazon.com/images/I/81SNq42v7RL._AC_SX342_.jpg'
      },
      {
        type: 'cotton',
        color: 'crimson',
        price: 9.99,
        image: 'https://m.media-amazon.com/images/I/81l8qQbU6FL._AC_SX342_.jpg'
      },
      {
        type: 'corduroy',
        color: 'grey',
        price: 22.68,
        image: 'https://images-na.ssl-images-amazon.com/images/I/A1Jd6fQa1iL._AC_SY450_.jpg'
      },
      {
        type: 'corduroy',
        color: 'khaki',
        price: 21.03,
        image: 'https://m.media-amazon.com/images/I/51xGR+Ru+RL._AC_SY450_.jpg'
      },
      {
        type: 'corduroy',
        color: 'Fresh Dew',
        price: 13.16,
        image: 'https://images-na.ssl-images-amazon.com/images/I/91Cu5ZBUqyL._AC_SY450_.jpg'
      },
      {
        type: 'denim',
        color: 'blue',
        price: 11.79,
        image: 'https://images-na.ssl-images-amazon.com/images/I/81mXuf1hmRL._AC_SY450_.jpg'
      }

], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Fabrics', null, {});

  }
};
