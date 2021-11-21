"use strict";
const { v4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "atleticas",
      [
        {
          id: v4(),
          nome: "Tubarões",
          data_criacao: '12/12/2012',
        },
        {
          id: v4(),
          nome: "Águia",
          data_criacao: '11/11/2011',
        },
        {
          id: v4(),
          nome: "ADMonstos",
          data_criacao: '10/10/2010',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("atleticas", null, {});
  },
};
