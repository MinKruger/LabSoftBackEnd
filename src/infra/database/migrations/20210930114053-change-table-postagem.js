"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("postagens", "id_tipoPostagem");
    await queryInterface.removeColumn("postagens", "id_atletica");
    await queryInterface.removeColumn("postagens", "likes");

    await queryInterface.dropTable("tipo_postagem");

    await queryInterface.addColumn("postagens", "tipo", {
      type: Sequelize.ENUM("EVENTOS", "NOTICIAS", "JOGOS"),
      allowNull: false,
    });
    await queryInterface.addColumn("postagens", "imagem", {
      type: Sequelize.TEXT,
      allowNull: true,
    });
    await queryInterface.addColumn("postagens", "descricao", {
      type: Sequelize.STRING(300),
      allowNull: false,
    });
    await queryInterface.addColumn("postagens", "data_evento", {
      type: Sequelize.DATE,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("tipo_postagem", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      descricao: {
        type: Sequelize.STRING(200),
        allowNull: false,
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
    });

    await queryInterface.removeColumn("postagens", "tipo");
    await queryInterface.removeColumn("postagens", "imagem");
    await queryInterface.removeColumn("postagens", "data_evento");
    await queryInterface.removeColumn("postagens", "descricao");

    await queryInterface.addColumn("postagens", "id_tipoPostagem", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: {
          tableName: "tipo_postagem",
        },
        key: "id",
      },
    });

    await queryInterface.addColumn("postagens", "id_atletica", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: {
          tableName: "atleticas",
        },
        key: "id",
      },
    });

    await queryInterface.addColumn("postagens", "likes", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },
};
