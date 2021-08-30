"use strict";
const { v4 } = require("uuid");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: v4(),
          name: "test1",
          email: "test1@mail.com",
          cpf: "11111111111",
        },
        {
          id: v4(),
          name: "test2",
          email: "test2@mail.com",
          cpf: "22222222222",
        },
        {
          id: v4(),
          name: "test3",
          email: "test3@mail.com",
          cpf: "33333333333",
        },
        {
          id: v4(),
          name: "test4",
          email: "test4@mail.com",
          cpf: "44444444444",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
