"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("usuarios", "id_atletica", {
      type: Sequelize.UUID,
      onDelete: "SET NULL",
      references: {
        model: {
          tableName: "atleticas",
        },
        key: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("usuarios", "id_atletica");
  },
};
