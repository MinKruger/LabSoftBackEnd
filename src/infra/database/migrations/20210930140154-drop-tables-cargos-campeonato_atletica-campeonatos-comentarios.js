"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn("jogos", "id_campeonato", {
        transaction,
      });

      await queryInterface.dropTable("cargos", { transaction });
      await queryInterface.dropTable("campeonato_atletica", { transaction });
      await queryInterface.dropTable("campeonatos", { transaction });
      await queryInterface.dropTable("comentarios", { transaction });
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
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
            type: Sequelize.DATE,
            allowNull: false,
          },
          id_vencedor: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
              model: {
                tableName: "atleticas",
              },
              key: "id",
            },
          },
          id_modalidade: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
              model: {
                tableName: "modalidades",
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
        "jogos",
        "id_campeonato",
        {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: {
              tableName: "campeonatos",
            },
            key: "id",
          },
        },
        { transaction }
      );

      await queryInterface.createTable(
        "cargos",
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
        "campeonato_atletica",
        {
          id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
          },
          id_campeonato: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
              model: {
                tableName: "campeonatos",
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
        "comentarios",
        {
          id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
          },
          conteudo: {
            type: Sequelize.STRING(250),
            allowNull: false,
          },
          likes: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          id_postagem: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
              model: {
                tableName: "postagens",
              },
              key: "id",
            },
          },
          id_aluno: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
              model: {
                tableName: "alunos",
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
    });
  },
};
