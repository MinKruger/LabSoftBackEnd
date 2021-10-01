"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("atleticas", "id_usuario", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: {
          tableName: "usuarios",
        },
        key: "id",
      },
    });

    await queryInterface.addColumn("alunos", "dataNascimento", {
      type: Sequelize.STRING(25),
      allowNull: false,
    });

    await queryInterface.addColumn("modalidades", "id_liga_das_atleticas", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: {
          tableName: "liga_das_atleticas",
        },
        key: "id",
      },
    });

    await queryInterface.addColumn("fases", "id_modalidade", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: {
          tableName: "modalidades",
        },
        key: "id",
      },
    });

    await queryInterface.addColumn("jogos", "local", {
      type: Sequelize.STRING(200),
      allowNull: true,
    });

    await queryInterface.removeColumn("jogos", "id_vencedor");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("atleticas", "id_usuario");
    await queryInterface.removeColumn("alunos", "dataNascimento");
    await queryInterface.removeColumn("modalidades", "id_liga_das_atleticas");
    await queryInterface.removeColumn("fases", "id_modalidade");
    await queryInterface.removeColumn("jogos", "local");

    await queryInterface.addColumn("jogos", "id_vencedor", {
      type: Sequelize.UUID,
      references: {
        model: {
          tableName: "atleticas",
        },
        key: "id",
      },
    });
  },
};
