"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.changeColumn(
        "atleticas",
        "logo",
        {
          type: Sequelize.TEXT("medium"),
          allowNull: false,
        },
        { transaction }
      );

      await queryInterface.changeColumn(
        "parceiros",
        "logo",
        {
          type: Sequelize.TEXT("medium"),
          allowNull: false,
        },
        { transaction }
      );

      await queryInterface.changeColumn(
        "postagens",
        "imagem",
        {
          type: Sequelize.TEXT("medium"),
          allowNull: false,
        },
        { transaction }
      );
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.changeColumn(
        "atleticas",
        "logo",
        {
          type: Sequelize.TEXT("medium"),
          allowNull: false,
        },
        { transaction }
      );

      await queryInterface.changeColumn(
        "parceiros",
        "logo",
        {
          type: Sequelize.TEXT("medium"),
          allowNull: false,
        },
        { transaction }
      );

      await queryInterface.changeColumn(
        "postagens",
        "imagem",
        {
          type: Sequelize.TEXT("medium"),
          allowNull: false,
        },
        { transaction }
      );
    });
  },
};
