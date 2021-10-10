"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("usuarios", "foto", {
      type: Sequelize.TEXT("medium"),
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("usuarios", "foto", {
      type: Sequelize.TEXT("medium"),
      allowNull: true,
    });
  },
};
