'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Measurements', [
      {
      chest: 40.5,
      shoulders: 16,
      sleeves: 22.5,
      biceps: 11.5,
      wrist: 6,
      waist: 36.5,
      jacketLength: 22.5,
      height: 62,
      hip: 39.75,
      thighCircumference: 23.5,
      kneeCircumference: 13.5,
      ankleCircumference: 14,
      waistToAnkle: 30,
      ankleToKnee: 25,
      kneeToThigh: 5,
      frontRise: 10,
      backRise: 15,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      chest: 32,
      shoulders: 12,
      sleeves: 18,
      biceps: 10,
      wrist: 6,
      waist: 23.5,
      jacketLength: 20,
      height: 60,
      hip: 34,
      thighCircumference: 19,
      kneeCircumference: 12.5,
      ankleCircumference: 12,
      waistToAnkle: 20,
      ankleToKnee: 15,
      kneeToThigh: 2,
      frontRise: 6,
      backRise: 5,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      chest: 35,
      shoulders: 14,
      sleeves: 20,
      biceps: 11,
      wrist: 8,
      waist: 27,
      jacketLength: 21,
      height: 59,
      hip: 36,
      thighCircumference: 21,
      kneeCircumference: 13,
      ankleCircumference: 13,
      waistToAnkle: 25,
      ankleToKnee: 20,
      kneeToThigh: 3,
      frontRise: 8,
      backRise: 10,
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Measurements', null, {});

  }
};
