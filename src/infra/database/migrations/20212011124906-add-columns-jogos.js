"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("jogos", "id_campeonato", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: {
          tableName: "campeonatos",
        },
        key: "id",
      },
    });

    await queryInterface.addColumn("jogos", "hora_jogo", {
      type: Sequelize.STRING(30),
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("jogos", "hora_jogo");
    await queryInterface.removeColumn("jogos", "id_campeonato");
  },
};
