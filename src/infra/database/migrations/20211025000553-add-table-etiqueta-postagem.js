'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("etiquetas_postagens", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      id_etiqueta: {
        type: Sequelize.UUID,
        onDelete: "SET NULL",
        references: {
          model: {
            tableName: "etiquetas",
          },
          key: "id",
        },
      },
      id_postagem: {
        type: Sequelize.UUID,
        onDelete: "SET NULL",
        references: {
          model: {
            tableName: "postagens",
          },
          key: "id",
        },
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
    await queryInterface.dropTable("etiquetas_postagens");
  }
};
