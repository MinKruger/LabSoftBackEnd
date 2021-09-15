"use strict";
const { v4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "cursos",
      [
        {
          id: v4(),
          nome: "Tubarões",
        },
        {
          id: v4(),
          nome: "Leões",
        },
        {
          id: v4(),
          nome: "Onças",
        },
        {
          id: v4(),
          nome: "ADMonstros",
        },
        {
          id: v4(),
          nome: "Águas",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("cursos", null, {});
  },
};
