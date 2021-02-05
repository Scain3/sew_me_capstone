'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Patterns', [
        {
          patternCompany: 'McCall',
          patternNumber: 'M7022',
          patternType: 'skirt',
          image1: 'https://images.pexels.com/photos/932403/pexels-photo-932403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          image2: 'https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          image3: 'https://images.pexels.com/photos/932398/pexels-photo-932398.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          price: 18.99,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '8462',
        patternType: 'skirt',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/816Mic8nTpL._AC_SX679_.jpg',
        price: 13.95,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '1459',
        patternType: 'dress',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/716Sv1nl01L._AC_SX679_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/51sPxOyuTXL._AC_US40_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/51cRWCPfyBL._AC_US40_.jpg',
        price: 11.24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '8248',
        patternType: 'dress',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/41q8nBpFOZL._AC_US40_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/61wE3XQpfPL._AC_US40_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/61zj6wK1mYL._AC_SX679_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/61zj6wK1mYL._AC_SX679_.jpg',
        price: 14.13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '8509',
        patternType: 'coat',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/81D3kLFIWtL._AC_SX679_.jpg',
        price: 16.55,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'McCall',
        patternNumber: '6521',
        patternType: 'jacket',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/51dSRgEysjL._AC_US40_.jpg',
        price: 21.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '8447',
        patternType: 'jumper',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/814mRYUe6QL._AC_SX679_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/512TZorIW2L._AC_US40_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/41XQUaeKceL._AC_US40_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/91qYIreakaL._AC_SX679_.jpg',
        price: 10.70,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Butterick',
        patternNumber: '6018',
        patternType: 'dress',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/51ssIPQB-VL._AC_.jpg',
        price: 13.60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'McCall',
        patternNumber: 'M7907',
        patternType: 'pants',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/717o4CRsBEL._AC_SX679_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/31JhLkUOwJL._AC_US40_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/41cP473DxgL._AC_US40_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/519DJWv7%2BhL._AC_US40_.jpg',
        price: 7.67,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'McCall',
        patternNumber: 'M8007',
        patternType: 'pants',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/41UUy5yBfHL._AC_US40_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/41ziyB5ZrEL._AC_US40_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/41YdQGvVHLL._AC_US40_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/51YiqfGA7oL._AC_US40_.jpg',
        price: 11.71,
        createdAt: new Date(),
        updatedAt: new Date()
      }
], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Patterns', null, {});

  }
};
