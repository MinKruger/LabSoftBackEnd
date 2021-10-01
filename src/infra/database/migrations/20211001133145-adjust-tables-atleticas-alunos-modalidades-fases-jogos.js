"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.addColumn(
        "atleticas",
        "id_usuario",
        {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: {
              tableName: "usuarios",
            },
            key: "id",
          },
        },
        { transaction }
      );

      await queryInterface.addColumn(
        "alunos",
        "dataNascimento",
        {
          type: Sequelize.STRING(25),
          allowNull: false,
        },
        { transaction }
      );

      await queryInterface.addColumn(
        "modalidades",
        "id_liga_das_atleticas",
        {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: {
              tableName: "liga_das_atleticas",
            },
            key: "id",
          },
        },
        { transaction }
      );

      await queryInterface.addColumn(
        "fases",
        "id_modalidade",
        {
          type: Sequelize.UUID,
          allowNull: false,
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
        "jogos",
        "local",
        {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
        { transaction }
      );

      await queryInterface.removeColumn("jogos", "id_vencedor", {
        transaction,
      });

      await queryInterface.changeColumn(
        "jogos",
        "data_jogo",
        {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        { transaction }
      );
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn("atleticas", "id_usuario", {
        transaction,
      });
      await queryInterface.removeColumn("alunos", "dataNascimento", {
        transaction,
      });
      await queryInterface.removeColumn(
        "modalidades",
        "id_liga_das_atleticas",
        {
          transaction,
        }
      );
      await queryInterface.removeColumn("fases", "id_modalidade", {
        transaction,
      });
      await queryInterface.removeColumn("jogos", "local", { transaction });

      await queryInterface.addColumn(
        "jogos",
        "id_vencedor",
        {
          type: Sequelize.UUID,
          references: {
            model: {
              tableName: "atleticas",
            },
            key: "id",
          },
        },
        { transaction }
      );

      await queryInterface.changeColumn(
        "jogos",
        "data_jogo",
        {
          type: Sequelize.DATE,
          allowNull: false,
        },
        { transaction }
      );
    });
  },
};
