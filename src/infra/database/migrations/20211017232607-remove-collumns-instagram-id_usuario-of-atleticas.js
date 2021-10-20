"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn("atleticas", "instagram", {
        transaction,
      });
      await queryInterface.removeColumn("atleticas", "id_usuario", {
        transaction,
      });
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.addColumn(
        "atleticas",
        "instagram",
        {
          type: Sequelize.STRING(250),
          allowNull: true,
        },
        { transaction }
      );

      await queryInterface.addColumn(
        "atleticas",
        "id_usuario",
        {
          type: Sequelize.UUID,
          allowNull: true,
          references: {
            model: {
              tableName: "usuarios",
            },
            key: "id",
          },
        },
        { transaction }
      );
    });
  },
};
