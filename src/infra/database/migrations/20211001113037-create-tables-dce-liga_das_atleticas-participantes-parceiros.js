"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        "dce",
        {
          id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
          },
          nome: {
            type: Sequelize.STRING(250),
            allowNull: false,
          },
          cargo: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          instagram: {
            type: Sequelize.STRING(250),
            allowNull: true,
          },
          id_usuario: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
              model: {
                tableName: "usuarios",
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
        },
        { transaction }
      );

      await queryInterface.createTable(
        "liga_das_atleticas",
        {
          id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
          },
          ano: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          descricao: {
            type: Sequelize.STRING(250),
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
        "participantes",
        {
          id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
          },
          pontuacao: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0,
          },
          id_liga_das_atleticas: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
              model: {
                tableName: "liga_das_atleticas",
              },
              key: "id",
            },
          },
          id_atletica: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
              model: {
                tableName: "atleticas",
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
        },
        { transaction }
      );

      await queryInterface.createTable(
        "parceiros",
        {
          id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
          },
          logo: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
          titulo: {
            type: Sequelize.STRING(250),
            allowNull: false,
          },
          descricao: {
            type: Sequelize.STRING(250),
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable("dce", { transaction });
      await queryInterface.dropTable("participantes", { transaction });
      await queryInterface.dropTable("liga_das_atleticas", { transaction });
      await queryInterface.dropTable("parceiros", { transaction });
    });
  },
};
