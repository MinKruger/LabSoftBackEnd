"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.addColumn(
        "fases",
        "peso",
        {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        { transaction }
      );

      await queryInterface.removeColumn("fases", "id_campeonato", {
        transaction,
      });
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn("fases", "peso", {
        transaction,
      });
    });

    await queryInterface.addColumn(
      "fases",
      "id_campeonato",
      {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: "campeonatos",
          },
          key: "id",
        },
      },
      { transaction }
    );
  },
};
