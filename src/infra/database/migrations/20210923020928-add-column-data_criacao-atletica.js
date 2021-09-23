"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("atleticas", "data_criacao", {
      type: Sequelize.STRING(30),
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("atleticas", "data_criacao");
  },
};
