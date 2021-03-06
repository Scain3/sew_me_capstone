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
      },
      {
        patternCompany: 'Vogue',
        patternNumber: 'V9278',
        patternType: 'dress',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/81we8Y9qwjL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/81wIpbWIGgL._AC_SY741_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/91TuzzYGOhL._AC_SY741_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/71feLmyV54L._AC_SX522_.jpg',
        price: 13.35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'McCall',
        patternNumber: 'M7745',
        patternType: 'dress',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/91PLdmrufmL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/91PLdmrufmL._AC_SX522_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/916zI9ef%2BwL._AC_SX522_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/916zI9ef%2BwL._AC_SX522_.jpg',
        price: 7.20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'McCall',
        patternNumber: 'M7719',
        patternType: 'dress',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/81I45xor3ML._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/81QA-nHWcIL._AC_SY741_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/8169mqGzMpL._AC_SY741_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/81i2fRzm-rL._AC_SX522_.jpg',
        price: 18.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'McCall',
        patternNumber: 'M7352',
        patternType: 'dress',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/81jQndn4bQL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/41qMgaxKGTL._AC_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/41cMAxJ4mcL._AC_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/41xmD49FqtL._AC_.jpg',
        price: 12.50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '8014',
        patternType: 'dress',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/91GIBa2YzEL._AC_SY741_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/91ajPnRyhdL._AC_SX522_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/61gSBOGDacL._AC_SY741_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/61vzTOzpi%2BL._AC_.jpg',
        price: 6.09,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Vogue',
        patternNumber: 'V9212',
        patternType: 'jacket',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/811JIEtWOQL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/A1WXkOj0GzL._AC_SY741_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/81zzge609oL._AC_SY741_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/712JlyY1QPL._AC_SX522_.jpg',
        price: 14.33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'McCall',
        patternNumber: 'M7637',
        patternType: 'jacket',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/911jxfSjGoL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/817gsA-bH%2BL._AC_SY741_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/919GzPoae5L._AC_SY741_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/81MyFxwFqwL._AC_SX522_.jpg',
        price: 14.05,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: 'S8845',
        patternType: 'jacket',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/71GtEXTW36L._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/61W56NNmrWL._AC_SX522_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/71cL-lJUWLL._AC_SX522_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/71PVZSjLb8L._AC_SX522_.jpg',
        price: 12.07,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'McCall',
        patternNumber: 'M7513',
        patternType: 'jacket',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/81FOC9rZZ-L._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/91T3%2BDihQcL._AC_SY741_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/81W3p-k-FDL._AC_SY741_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/81YxJqLoIJL._AC_SX522_.jpg',
        price: 12.44,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Vogue',
        patternNumber: 'V9097',
        patternType: 'jacket',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/71b%2BQ8X30NL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/41yNTvW-mdL._AC_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/41ZbAGKfnoL._AC_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/81TNVfJhfcL._AC_SY679_.jpg',
        price: 15.09,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'McCall',
        patternNumber: 'M7831',
        patternType: 'jumper',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/81qr%2BjDvEtL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/81eiT1OlerL._AC_SY741_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/811cPDN%2BrpL._AC_SY741_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/81r6hBjZSBL._AC_SX522_.jpg',
        price: 11.77,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '2539',
        patternType: 'jumper',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/61cJQ9gn6yL._AC_SY741_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/61272HdnhlL._AC_SY741_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/61272HdnhlL._AC_SY741_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/91vydR7y6HL._AC_SX522_.jpg',
        price: 14.90,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'McCall',
        patternNumber: 'M7459',
        patternType: 'jumper',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/81-RUbF7KVL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/51oYrZaK-CL._AC_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/51Wgdb4BFuL._AC_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/81nY9rDKGiL._AC_SX522_.jpg',
        price: 10.95,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '8142',
        patternType: 'jumper',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/71h0OyzAHuL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/610UmSNVVYL._AC_SX522_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/610UmSNVVYL._AC_SX522_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/715H5BGsRcL._AC_SX522_.jpg',
        price: 12.95,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '1075',
        patternType: 'jumper',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/81W%2BnBNBvPL._AC_SY741_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/716NKyr5MAL._AC_SX522_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/716NKyr5MAL._AC_SX522_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/716NKyr5MAL._AC_SX522_.jpg',
        price: 9.33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '8134',
        patternType: 'pants',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/713iG4WHTwL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/61GWk6j5u1L._AC_SX522_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/61GWk6j5u1L._AC_SX522_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/719PK7mzfEL._AC_SX522_.jpg',
        price: 12.67,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'McCall',
        patternNumber: 'M6901',
        patternType: 'pants',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/710jyOlgRyL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/711mFbd6BfL._AC_SX522_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/711mFbd6BfL._AC_SX522_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/711mFbd6BfL._AC_SX522_.jpg',
        price: 11.86,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '8056',
        patternType: 'pants',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/618WnTS00dL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/51K3ICzKvBL._AC_SY741_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/51K3ICzKvBL._AC_SY741_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/71AWcjVWE4L._AC_SX522_.jpg',
        price: 10.04,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '8268',
        patternType: 'pants',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/81RQC%2BNUOIL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/71ZQM2ATBFL._AC_SX522_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/71gYnZufpiL._AC_SX522_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/91ZJlXiBu2L._AC_SX522_.jpg',
        price: 12.40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'McCall',
        patternNumber: 'M7757',
        patternType: 'pants',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/91YX%2BIsU%2BzL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/314iP-4M8hL._AC_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/314iP-4M8hL._AC_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/91gGF7k1J%2BL._AC_SX522_.jpg',
        price: 12.12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'McCall',
        patternNumber: 'M79585',
        patternType: 'shirt',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/81SvAhSs5xL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/71-XQue4esL._AC_SY741_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/91NNvtvzH5L._AC_SY741_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/816xKrseFKL._AC_SX522_.jpg',
        price: 9.95,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '1544',
        patternType: 'shirt',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/919BDmM33XL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/81a7VHpfejL._AC_SX522_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/71rDwuxH80L._AC_SX522_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/911V261zlCL._AC_SX522_.jpg',
        price: 10.27,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '8180',
        patternType: 'shirt',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/71%2B1EqLd-6L._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/81s3oijFIlL._AC_SX522_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/61yeYHp2PoL._AC_SX522_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/71%2BREKtHbSL._AC_SX522_.jpg',
        price: 10.95,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Butterick',
        patternNumber: 'B4486',
        patternType: 'shirt',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/51s712riVkL._AC_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/81qxIgfLBNL._AC_SY741_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/81qxIgfLBNL._AC_SY741_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/51s712riVkL._AC_.jpg',
        price: 7.35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'McCall',
        patternNumber: 'M6548',
        patternType: 'shirt',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/71h2zeO3upL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/41tUsX9B7ML._AC_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/51jx94vU-ML._AC_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/51jx94vU-ML._AC_.jpg',
        price: 10.03,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '1369',
        patternType: 'skirt',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/61rieRyxDVL._AC_SX522_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/61P%2B8TExFLL._AC_SX522_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/61P%2B8TExFLL._AC_SX522_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/81ohzT745eL._AC_SX522_.jpg',
        price: 12.59,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '1110',
        patternType: 'skirt',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/71JSvsdKbaL._AC_SY741_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/61ry52TxbjL._AC_SY741_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/61ry52TxbjL._AC_SY741_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/51B0eNmYBaL._AC_.jpg',
        price: 10.54,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '6346',
        patternType: 'skirt',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/61z60LhPKdL._AC_SY741_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/61Ckm1%2BWqJL._AC_SY741_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/61Ckm1%2BWqJL._AC_SY741_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/71nMSY-GzCL._AC_SX522_.jpg',
        price: 10.19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '6843',
        patternType: 'skirt',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/61mrRI1jXXL._AC_SY741_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/91o6FkA3EEL._AC_SY679_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/61qNgpbYPEL._AC_SY741_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/81mN0ukYTqL._AC_SX522_.jpg',
        price: 12.24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '2314',
        patternType: 'skirt',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/7142Ui-Jo%2BL._AC_SY741_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/61wDGzxjiNL._AC_SY741_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/61wDGzxjiNL._AC_SY741_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/91Pcf5xVetL._AC_SX522_.jpg',
        price: 11.59,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: 'S8899',
        patternType: 'suit',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/81yOFZaI3oL._AC_SY741_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/713POwc-vqL._AC_SX522_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/81LWI8flQUL._AC_SX522_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/910gjlE%2BHYL._AC_SX522_.jpg',
        price: 11.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'McCall',
        patternNumber: '8256',
        patternType: 'suit',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/51WFVGE9EzL._AC_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/51WFVGE9EzL._AC_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/51WFVGE9EzL._AC_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/51WFVGE9EzL._AC_.jpg',
        price: 9.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'McCall',
        patternNumber: '5335',
        patternType: 'suit',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/71xlWbyShlL._AC_SY679_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/51RrtjO4tSL._AC_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/51RrtjO4tSL._AC_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/512zkwDt4NL._AC_.jpg',
        price: 14.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Butterick',
        patternNumber: '3628',
        patternType: 'suit',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/71jB5yzDQvL._AC_SY879_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/71jB5yzDQvL._AC_SY879_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/71pYVBfVZ2L._AC_SX522_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/71pYVBfVZ2L._AC_SX522_.jpg',
        price: 10.95,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patternCompany: 'Simplicity',
        patternNumber: '1324',
        patternType: 'suit',
        image1: 'https://images-na.ssl-images-amazon.com/images/I/7138WYFCfQL._AC_SY741_.jpg',
        image2: 'https://images-na.ssl-images-amazon.com/images/I/81sUN5X1UUL._AC_SY741_.jpg',
        image3: 'https://images-na.ssl-images-amazon.com/images/I/61UgwgXnRzL._AC_SY741_.jpg',
        image4: 'https://images-na.ssl-images-amazon.com/images/I/71iCpjkFMkL._AC_SX522_.jpg',
        price: 17.16,
        createdAt: new Date(),
        updatedAt: new Date()
      }
], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Patterns', null, {});

  }
};
