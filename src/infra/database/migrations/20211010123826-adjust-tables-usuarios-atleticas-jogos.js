"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.addColumn(
        "usuarios",
        "tipo",
        {
          type: Sequelize.ENUM("aluno", "atletica", "dce"),
          allowNull: false,
          defaultValue: "aluno",
        },
        { transaction }
      );

      await queryInterface.changeColumn(
        "usuarios",
        "foto",
        {
          type: Sequelize.TEXT("medium"),
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

      await queryInterface.changeColumn(
        "jogos",
        "id_time1",
        {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: {
              tableName: "participantes",
            },
            key: "id",
          },
        },
        { transaction }
      );

      await queryInterface.changeColumn(
        "jogos",
        "id_time2",
        {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: {
              tableName: "participantes",
            },
            key: "id",
          },
        },
        { transaction }
      );

      await queryInterface.addColumn(
        "jogos",
        "id_fase",
        {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: {
              tableName: "fases",
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
      await queryInterface.removeColumn("usuarios", "tipo", { transaction });
      await queryInterface.changeColumn(
        "usuarios",
        "foto",
        {
          type: Sequelize.TEXT,
        },
        { transaction }
      );
      await queryInterface.removeColumn("atleticas", "id_usuario", {
        transaction,
      });
      await queryInterface.changeColumn(
        "jogos",
        "id_time2",
        {
          type: Sequelize.UUID,
          allowNull: false,
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
        "id_time2",
        {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: {
              tableName: "atleticas",
            },
            key: "id",
          },
        },
        { transaction }
      );
      await queryInterface.removeColumn("jogos", "id_fase", { transaction });
    });
  },
};
