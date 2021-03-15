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
          image4: 'https://images-na.ssl-images-amazon.com/images/I/71Y%2BT6X-kWL._AC_SX679_.jpg',
          price: 18.99,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '8462',
        patternType: 'skirt',
        image1: 'https://i.pinimg.com/564x/d5/f3/cc/d5f3ccd54c132c6a3f7112c68547d5b4.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/816Mic8nTpL._AC_SX679_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/81918HRpHwL._AC_SX679_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/91AAVx49cvL._AC_SX679_.jpg',
        price: 13.95,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '1459',
        patternType: 'dress',
        image1: 'https://i.pinimg.com/564x/78/7d/bb/787dbb6d010efcfb4df4f5236a1a5e02.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/716Sv1nl01L._AC_SX679_.jpg',
        image3: 'https://i.etsystatic.com/8469073/r/il/9bee8f/1999653809/il_794xN.1999653809_gk2d.jpg',
        image4: 'https://i.etsystatic.com/8469073/r/il/e99992/1952120452/il_794xN.1952120452_6el9.jpg',
        price: 11.24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '8248',
        patternType: 'dress',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/61FG0VkxVjL._AC_SX679_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/61-Yi%2B95ENL._AC_SX679_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/61zj6wK1mYL._AC_SX679_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/71oAzkpG-fL._AC_SX679_.jpg',
        price: 14.13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '8509',
        patternType: 'coat',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/81D3kLFIWtL._AC_SX679_.jpg',
        image2: 'https://i.etsystatic.com/9991733/r/il/3f53c8/2538869303/il_794xN.2538869303_ivoo.jpg',
        image3: 'https://i.etsystatic.com/9991733/r/il/5b4a54/2491198752/il_794xN.2491198752_7pry.jpg',
        image4: 'https://i.etsystatic.com/9991733/r/il/af67d2/2538869307/il_794xN.2538869307_fyth.jpg',
        price: 16.55,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'McCall',
        patternNumber: '6521',
        patternType: 'jacket',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/91-evVKWrUL._AC_SX679_.jpg',
        image2: 'https://i.etsystatic.com/5703462/r/il/2e9893/2546533154/il_794xN.2546533154_2wpd.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/91-evVKWrUL._AC_SX679_.jpg',
        image4: 'https://i.etsystatic.com/5703462/r/il/2e9893/2546533154/il_794xN.2546533154_2wpd.jpg',
        price: 21.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '8447',
        patternType: 'jumper',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/814mRYUe6QL._AC_SX679_.jpg',
        image2: 'https://i.etsystatic.com/9047142/r/il/a16e4e/1235995630/il_794xN.1235995630_r7hy.jpg',
        image3: 'https://i.etsystatic.com/9047142/r/il/5058c3/1283226239/il_794xN.1283226239_jj0e.jpg',
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
        image2: 'https://cdn11.bigcommerce.com/s-9lsm50z07e/images/stencil/480x680/products/10432/72444/B6018_01__02173.1579913781.jpg?c=1',
        image3: 'https://cdn11.bigcommerce.com/s-9lsm50z07e/images/stencil/480x680/products/10432/72445/B6018_06__84791.1579913783.jpg?c=1',
        image4: 'https://cdn11.bigcommerce.com/s-9lsm50z07e/images/stencil/480x680/products/10432/72447/B6018_05__25243.1579913784.jpg?c=1',
        price: 13.60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'McCall',
        patternNumber: 'M7907',
        patternType: 'pants',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/717o4CRsBEL._AC_SX679_.jpg',
        image2: 'https://i.etsystatic.com/8469073/r/il/9e800d/2561709389/il_794xN.2561709389_rohp.jpg',
        image3: 'https://i.etsystatic.com/8469073/r/il/10bcb3/2561709379/il_794xN.2561709379_tjxo.jpg',
        image4: 'https://i.etsystatic.com/8469073/r/il/828595/2514044094/il_794xN.2514044094_orpb.jpg',
        price: 7.67,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'McCall',
        patternNumber: 'M8007',
        patternType: 'pants',
        image1: 'https://cdn11.bigcommerce.com/s-9lsm50z07e/images/stencil/480x680/products/16357/116821/M8007_a__91293.1579976025.jpg?c=1',
        image2: 'https://cdn11.bigcommerce.com/s-9lsm50z07e/images/stencil/480x680/products/16357/116816/M8007_01__88458.1579976020.jpg?c=1',
        image3: 'https://cdn11.bigcommerce.com/s-9lsm50z07e/images/stencil/480x680/products/16357/116818/M8007_02__73933.1579976022.jpg?c=1',
        image4: 'https://cdn11.bigcommerce.com/s-9lsm50z07e/images/stencil/480x680/products/16357/116817/M8007_03__53484.1579976021.jpg?c=1',
        price: 11.71,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '8508',
        patternType: 'suit',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/611pApwbpQL._AC_SX679_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/71Kz15CeH6L._AC_SX679_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/51ox8BVsC3L._AC_SX679_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/611pApwbpQL._AC_SX679_.jpg',
        price: 5.29,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Butterick',
        patternNumber: '6495',
        patternType: 'suit',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/51VPdHnShRL._AC_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/51VPdHnShRL._AC_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/51VPdHnShRL._AC_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/51VPdHnShRL._AC_.jpg',
        price: 13.69,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Butterick',
        patternNumber: 'B5786',
        patternType: 'shirt',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/71uwsC5sk0L._AC_SX679_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/810TmsX7MZL._AC_SY879_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/41r%2B5NEa40L._AC_SX679_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/41ap36e5zCL._AC_SX679_.jpg',
        price: 12.25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Butterick',
        patternNumber: '6497',
        patternType: 'coat',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/818ZByhba0L._AC_SX679_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/81SmLfeW3IL._AC_SY879_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/81wILhVOGAL._AC_SY879_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/81weGKVVjnL._AC_SY879_.jpg',
        price: 13.52,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Butterick',
        patternNumber: 'B4790',
        patternType: 'dress',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/51d2hy-jKQL._AC_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/71BCQizDXLL._AC_SY879_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/51d2hy-jKQL._AC_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/71BCQizDXLL._AC_SY879_.jpg',
        price: 10.15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Butterick',
        patternNumber: 'B6108',
        patternType: 'jacket',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/71jRBi2blsL._AC_SX679_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/41K%2BhzWOffL._AC_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/41B9flAXW7L._AC_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/41-ek7aFS2L._AC_.jpg',
        price: 12.15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Butterick',
        patternNumber: 'B6522',
        patternType: 'jumper',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/81YddaRP9qL._AC_SX679_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/81Xl0lSMKFL._AC_SY879_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/81pBBXx0EYL._AC_SY879_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/91YYRgDbyAL._AC_SY879_.jpg',
        price: 13.54,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Butterick',
        patternNumber: 'B4292',
        patternType: 'pants',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/51JuSNFmZEL._AC_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/71oqHgyvFWL._AC_SY879_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/41LHh9lP9JL._AC_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/51JuSNFmZEL._AC_.jpg',
        price: 14.54,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Butterick',
        patternNumber: 'B5526',
        patternType: 'shirt',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/51vaYulqxBL._AC_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/813HnZlbO0L._AC_SY879_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/417H3L96%2BNL._AC_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/51vaYulqxBL._AC_.jpg',
        price: 10.45,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Butterick',
        patternNumber: '6318',
        patternType: 'dress',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/51CmKwHoTKL._AC_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/51CmKwHoTKL._AC_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/51CmKwHoTKL._AC_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/51CmKwHoTKL._AC_.jpg',
        price: 12.95,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Vogue',
        patternNumber: 'V9340',
        patternType: 'coat',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/81J3su-w%2BqL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/717Z2QSle7L._AC_SX522_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/71ZI6TK9Z3L._AC_SY741_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/81xiFypZOkL._AC_SY741_.jpg',
        price: 15.29,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Vogue',
        patternNumber: 'V9043',
        patternType: 'coat',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/613G7X%2BRoiL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/81DcynZ-D5L._AC_SY679_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/416x7FU-PPL._AC_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/51uIA2yd1ZL._AC_.jpg',
        price: 16.95,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'McCall',
        patternNumber: 'M7373',
        patternType: 'coat',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/91Oh8uwdVzL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/61hYYwRyowL._AC_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/61INhpcPxeL._AC_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/81WrGIpX9UL._AC_SX522_.jpg',
        price: 4.75,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '8482',
        patternType: 'coat',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/81%2BtZ79ofqL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/8142U7nQY8L._AC_SX522_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/81TU6IinrGL._AC_SX522_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/91IRRHEj1XL._AC_SX522_.jpg',
        price: 12.79,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'McCall',
        patternNumber: 'M7374',
        patternType: 'coat',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/8101zffsseL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/51Gmn3E90CL._AC_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/41jhqzv0SOL._AC_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/81gfdax6HJL._AC_SX522_.jpg',
        price: 18.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }
], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Patterns', null, {});

  }
};
