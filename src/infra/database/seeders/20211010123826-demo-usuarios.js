"use strict";
const { v4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "usuarios",
      [
        {
          id: '00000000-0000-0000-0000-000000000000',
          login: "admin",
          senha: "secret",
          tipo: "dce",
          foto: null,
        },
        {
          id: v4(),
          login: "tubaroes",
          senha: "tutubarao",
          tipo: "atletica",
          foto: null,
        },
        {
          id: v4(),
          login: "carlos@uvv.net",
          senha: "carlinhos",
          tipo: "aluno",
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
