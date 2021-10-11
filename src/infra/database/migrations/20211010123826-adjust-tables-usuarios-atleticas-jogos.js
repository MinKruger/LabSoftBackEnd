"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("usuarios", "tipo", {
      type: Sequelize.ENUM('aluno', 'atletica', 'dce'),
      allowNull: false,
      defaultValue: 'aluno',
    });

    await queryInterface.changeColumn("usuarios", "foto", {
      type: Sequelize.TEXT("medium"),
    });

    await queryInterface.addColumn("atleticas", "id_usuario", {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: {
          tableName: "usuarios",
        },
        key: "id",
      },
    });

    await queryInterface.changeColumn("jogos", "id_time1", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: {
          tableName: "participantes",
        },
        key: "id",
      },
    });

    await queryInterface.changeColumn("jogos", "id_time2", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: {
          tableName: "participantes",
        },
        key: "id",
      },
    });

    await queryInterface.addColumn("jogos", "id_fase", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: {
          tableName: "fases",
        },
        key: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("usuarios", "tipo");
    await queryInterface.changeColumn("usuarios", "foto", {
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn("atleticas", "id_usuario");
    await queryInterface.changeColumn("jogos", "id_time2", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: {
          tableName: "atleticas",
        },
        key: "id",
      },
    });
    await queryInterface.changeColumn("jogos", "id_time2", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: {
          tableName: "atleticas",
        },
        key: "id",
      },
    });
    await queryInterface.removeColumn("jogos", "id_fase");
  },
};
