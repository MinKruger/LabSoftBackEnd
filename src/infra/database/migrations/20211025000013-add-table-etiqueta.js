'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("etiquetas", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      descricao: {
        type: Sequelize.STRING(250),
        allowNull: false,
        unique: true,
      },
      created_at: {
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
      },
      updated_at: {
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)"
        ),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("etiquetas");
  }
};
