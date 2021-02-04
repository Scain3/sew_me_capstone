'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Patterns', [
        {
          patternCompany: 'McCall',
          patternNumber: 'M7022',
          patternType: 'skirt',
          images: ['https://images-na.ssl-images-amazon.com/images/I/71Y%2BT6X-kWL._AC_SX679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/6153A05J7zL._AC_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51l%2BTRbIS7L._AC_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51cqyZBCYbL._AC_US40_.jpg'],
          price: 18.99,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '8462',
        patternType: 'skirt',
        images: ['https://images-na.ssl-images-amazon.com/images/I/816Mic8nTpL._AC_SX679_.jpg'],
        price,
        createdAt,
        updatedAt
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '1459',
        patternType: 'dress',
        images: ['https://images-na.ssl-images-amazon.com/images/I/716Sv1nl01L._AC_SX679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51sPxOyuTXL._AC_US40_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51cRWCPfyBL._AC_US40_.jpg'],
        price: 11.24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '8248',
        patternType: 'dress',
        images: ['https://images-na.ssl-images-amazon.com/images/I/41q8nBpFOZL._AC_US40_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61wE3XQpfPL._AC_US40_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61zj6wK1mYL._AC_SX679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61zj6wK1mYL._AC_SX679_.jpg'],
        price: 14.13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '8509',
        patternType: 'coat',
        images: ['https://images-na.ssl-images-amazon.com/images/I/81D3kLFIWtL._AC_SX679_.jpg'],
        price: 16.55,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany,
        patternNumber,
        patternType,
        images,
        price,
        createdAt,
        updatedAt
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '8447',
        patternType: 'jumper',
        images: ['https://images-na.ssl-images-amazon.com/images/I/814mRYUe6QL._AC_SX679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/512TZorIW2L._AC_US40_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/41XQUaeKceL._AC_US40_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/91qYIreakaL._AC_SX679_.jpg'],
        price: 10.70,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Butterick',
        patternNumber: '6018',
        patternType: 'dress',
        images: ['https://images-na.ssl-images-amazon.com/images/I/51ssIPQB-VL._AC_.jpg'],
        price: 13.60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany,
        patternNumber,
        patternType,
        images,
        price,
        createdAt,
        updatedAt
      },
      {
        patternCompany,
        patternNumber,
        patternType,
        images,
        price,
        createdAt,
        updatedAt
      }
], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Patterns', null, {});

  }
};
