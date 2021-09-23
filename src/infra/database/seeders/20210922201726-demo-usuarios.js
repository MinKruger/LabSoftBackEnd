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
          tipo_usuario: "dce",
          id_atletica: null,
        },
        {
          id: v4(),
          login: "usuario_atletica",
          senha: "secret",
          tipo_usuario: "atletica",
          id_atletica: null,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("usuarios", null, {});
  },
};
