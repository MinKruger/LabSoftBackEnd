"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn("alunos", "id_atletica", { transaction });
      await queryInterface.removeColumn("alunos", "dataNascimento", { transaction });
      await queryInterface.addColumn(
        "alunos", "data_nascimento",
        {
          type: Sequelize.Sequelize.STRING(30),
          allowNull: true,
        },
        { transaction }
      );

      await queryInterface.removeColumn("alunos", "id_curso", { transaction });
      await queryInterface.addColumn(
        "alunos", "id_curso", 
        {
          type: Sequelize.UUID,
          allowNull: true,
          references: {
            model: {
              tableName: "cursos",
            },
            key: "id",
          },
        },
        {transaction}
      );
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {

      await queryInterface.removeColumn("alunos", "id_curso", { transaction });

      await queryInterface.addColumn(
        "alunos", "id_curso", 
        {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: {
              tableName: "cursos",
            },
            key: "id",
          },
        },
        {transaction}
      );

      await queryInterface.removeColumn("alunos", "data_nascimento", { transaction });

      await queryInterface.addColumn(
        "alunos",
        "dataNascimento",
        {
          type: Sequelize.Sequelize.STRING(30),
          allowNull: false,
        },
        { transaction }
      );

      await queryInterface.addColumn(
        "alunos",
        "id_atletica",
        {
          type: Sequelize.UUID,
          allowNull: true,
          references: {
            model: {
              tableName: "atleticas",
            },
            key: "id",
          },
        },
        { transaction }
      );
    });
  },
};
