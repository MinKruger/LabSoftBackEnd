"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        "modalidades",
        {
          id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
          },
          nome: {
            type: Sequelize.STRING(200),
            allowNull: false,
            unique: true,
          },
          descricao: {
            type: Sequelize.STRING(500),
            allowNull: true,
          },
          imagem: {
            type: Sequelize.STRING(200),
            allowNull: true,
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
        },
        { transaction }
      );

      await queryInterface.createTable(
        "eventos",
        {
          id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
          },
          nome: {
            type: Sequelize.STRING(200),
            allowNull: false,
            unique: true,
          },
          descricao: {
            type: Sequelize.STRING(500),
            allowNull: true,
          },
          imagem: {
            type: Sequelize.STRING(200),
            allowNull: true,
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
        },
        { transaction }
      );

      await queryInterface.removeColumn("campeonatos", "evento", {
        transaction,
      });
      await queryInterface.removeColumn("campeonatos", "modalidade", {
        transaction,
      });

      await queryInterface.addColumn(
        "campeonatos",
        "id_evento",
        {
          type: Sequelize.UUID,
          references: {
            model: {
              tableName: "eventos",
            },
            key: "id",
          },
        },
        { transaction }
      );

      await queryInterface.addColumn(
        "campeonatos",
        "id_modalidade",
        {
          type: Sequelize.UUID,
          references: {
            model: {
              tableName: "modalidades",
            },
            key: "id",
          },
        },
        { transaction }
      );
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable("modalidades", { transaction });
      await queryInterface.dropTable("eventos", { transaction });

      await queryInterface.removeColumn("campeonatos", "id_evento", {
        transaction,
      });
      await queryInterface.removeColumn("campeonatos", "id_modalidade", {
        transaction,
      });

      await queryInterface.addColumn(
        "campeonatos",
        "evento",
        {
          type: Sequelize.STRING(250),
          allowNull: false,
        },
        { transaction }
      );

      await queryInterface.addColumn(
        "campeonatos",
        "modalidade",
        {
          type: Sequelize.STRING(250),
          allowNull: false,
        },
        { transaction }
      );
    });
  },
};
