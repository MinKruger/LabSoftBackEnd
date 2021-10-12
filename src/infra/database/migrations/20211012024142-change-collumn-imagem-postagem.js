"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn("postagens", "imagem", { transaction });
      await queryInterface.addColumn(
        "postagens",
        "imagem",
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
        { transaction }
      );
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn("postagens", "imagem", { transaction });
      await queryInterface.addColumn(
        "postagens",
        "imagem",
        {
          type: Sequelize.TEXT("medium"),
          allowNull: true,
        },
        { transaction }
      );
    });
  },
};
