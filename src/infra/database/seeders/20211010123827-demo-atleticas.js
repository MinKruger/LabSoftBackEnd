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
          id_usuario: '00000000-0000-0000-0000-000000000000'
        },
        {
          id: v4(),
          nome: "Águia",
          logo: "asdasdq2313131",
        },
        {
          id: v4(),
          nome: "ADMonstos",
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
