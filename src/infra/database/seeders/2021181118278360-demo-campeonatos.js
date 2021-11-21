"use strict";
const { v4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "campeonatos",
      [
        {
          id: '00000000-0000-0000-0000-000000000000',
          nome: "Beibleide",
          ano: 1998,
          status: "cancelado",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("campeonatos", null, {});
  },
};
