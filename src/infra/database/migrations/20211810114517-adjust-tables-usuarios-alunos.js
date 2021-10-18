"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("usuarios", "email", {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true,
    });
    await queryInterface.addColumn("usuarios", "nome", {
      type: Sequelize.STRING(200),
      allowNull: false,
    });
    await queryInterface.addColumn("usuarios", "instagram", {
      type: Sequelize.STRING(100),
      allowNull: true,
    });
    await queryInterface.addColumn("usuarios", "permissao", {
      type: Sequelize.ENUM('aluno', 'atletica', 'dce1', 'dce2', 'dce3'),
      allowNull: false,
      defaultValue: 'aluno',
    });

    await queryInterface.removeColumn("usuarios", "tipo");
    await queryInterface.removeColumn("usuarios", "login");

    await queryInterface.addColumn("alunos", "matricula", {
      type: Sequelize.STRING(9),
      allowNull: false,
    });
    
    await queryInterface.removeColumn("alunos", "nome");

    await queryInterface.dropTable("dce");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("usuarios", "email");
    await queryInterface.removeColumn("usuarios", "nome");
    await queryInterface.removeColumn("usuarios", "instagram");
    await queryInterface.removeColumn("usuarios", "permissao");

    await queryInterface.addColumn("usuarios", "tipo", {
      type: Sequelize.ENUM('aluno', 'atletica', 'dce'),
      allowNull: false,
      defaultValue: 'aluno',
    });
    await queryInterface.addColumn("usuarios", "login", {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true,
    });

    await queryInterface.removeColumn("alunos", "matricula");

    await queryInterface.addColumn("alunos", "nome", {
      type: Sequelize.STRING(250),
      allowNull: false,
    });

    await queryInterface.createTable(
      "dce",
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
        cargo: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        instagram: {
          type: Sequelize.STRING(250),
          allowNull: true,
        },
        id_usuario: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: {
              tableName: "usuarios",
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
      }
    );
  },
};
