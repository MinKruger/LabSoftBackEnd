"use strict";
const { v4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "usuarios",
      [
        {
          id: v4(),
          login: "username",
          senha: "password",
          foto: null,
        },
        {
          id: v4(),
          login: "nameuser",
          senha: "wordpass",
          foto: null,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("usuarios", null, {});
  },
};
