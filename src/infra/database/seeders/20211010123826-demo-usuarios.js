"use strict";
const { v4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "usuarios",
      [
        {
          id: '00000000-0000-0000-0000-000000000000',
          email: "admin",
          senha: "admin",
          permissao: "dce1",
          foto: null,
          nome: "teste",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("usuarios", null, {});
  },
};
