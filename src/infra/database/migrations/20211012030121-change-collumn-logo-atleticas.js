"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn("atleticas", "logo", { transaction });
      await queryInterface.addColumn(
        "atleticas",
        "logo",
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
      await queryInterface.removeColumn("atleticas", "logo", { transaction });
      await queryInterface.addColumn(
        "atleticas",
        "logo",
        {
          type: Sequelize.TEXT("medium"),
          allowNull: true,
        },
        { transaction }
      );
    });
  },
};
