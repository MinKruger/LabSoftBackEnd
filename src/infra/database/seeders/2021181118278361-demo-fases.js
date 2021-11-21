"use strict";
const { v4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "fases",
      [
        {
          id: v4(),
          nome: "quartas",
          id_campeonato: '00000000-0000-0000-0000-000000000000',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("fases", null, {});
  },
};
