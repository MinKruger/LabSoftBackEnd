"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("usuarios", "tipo_usuario");
    await queryInterface.removeColumn("usuarios", "id_atletica");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("usuarios", "id_atletica", {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: {
          tableName: "atleticas",
        },
        key: "id",
      }
    });
    await queryInterface.addColumn("usuarios", "tipo_usuario", {
      type: Sequelize.ENUM('atletica', 'dce'),
      allowNull: false
    });
  },
};
