"use strict";
const { v4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "cursos",
      [
        {
          id: v4(),
          nome: "Ciência da Computação",
        },
        {
          id: v4(),
          nome: "Direito",
        },
        {
          id: v4(),
          nome: "Sistema da informação",
        },
        {
          id: v4(),
          nome: "Medicina",
        },
        {
          id: v4(),
          nome: "Engenharia",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("cursos", null, {});
  },
};
