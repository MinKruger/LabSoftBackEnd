"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn("fases", "id_modalidade", {
        transaction,
      });
      await queryInterface.removeColumn(
        "participantes",
        "id_liga_das_atleticas",
        { transaction }
      );

      await queryInterface.dropTable("modalidades", { transaction });
      await queryInterface.dropTable("liga_das_atleticas", { transaction });

      await queryInterface.createTable(
        "campeonatos",
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
          ano: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          modalidade: {
            type: Sequelize.STRING(250),
            allowNull: false,
          },
          evento: {
            type: Sequelize.STRING(250),
            allowNull: false,
          },
          evento: {
            type: Sequelize.STRING(250),
            allowNull: false,
          },
          status: {
            type: Sequelize.ENUM(
              "ANDAMENTO",
              "ENCERRADO",
              "CANCELADO",
              "AGUARDANDO"
            ),
            allowNull: false,
          },
          id_vencedor: {
            type: Sequelize.UUID,
            allowNull: true,
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

      await queryInterface.addColumn(
        "participantes",
        "id_campeonato",
        {
          type: Sequelize.UUID,
          allowNull: true,
          references: {
            model: {
              tableName: "campeonatos",
            },
            key: "id",
          },
        },
        { transaction }
      );

      await queryInterface.addColumn(
        "fases",
        "id_campeonato",
        {
          type: Sequelize.UUID,
          allowNull: true,
          references: {
            model: {
              tableName: "campeonatos",
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
      await queryInterface.createTable(
        "modalidades",
        {
          id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
          },
          descricao: {
            type: Sequelize.STRING(200),
            allowNull: false,
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

      await queryInterface.addColumn(
        "fases",
        "id_modalidade",
        {
          type: Sequelize.UUID,
          allowNull: true,
          references: {
            model: {
              tableName: "modalidades",
            },
            key: "id",
          },
        },
        { transaction }
      );

      await queryInterface.addColumn(
        "participantes",
        "id_liga_das_atleticas",
        {
          type: Sequelize.UUID,
          allowNull: true,
          references: {
            model: {
              tableName: "liga_das_atleticas",
            },
            key: "id",
          },
        },
        { transaction }
      );

      await queryInterface.dropTable("campeonatos", { transaction });

      await queryInterface.removeColumn("participantes", "id_campeonato", {
        transaction,
      });
      await queryInterface.removeColumn("fases", "id_campeonato", {
        transaction,
      });
    });
  },
};
