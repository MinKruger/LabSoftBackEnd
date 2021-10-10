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
          logo: "asdasdasddadsa23213123asdasd",
          data_criacao: '12/12/2012',
          id_usuario: '00000000-0000-0000-0000-000000000000'
        },
        {
          id: v4(),
          nome: "Águia",
          data_criacao: '11/11/2011',
          logo: "asdasdq2313131",
        },
        {
          id: v4(),
          nome: "ADMonstos",
          data_criacao: '10/10/2010',
          logo: "dadasdasd23123123",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("atleticas", null, {});
  },
};
