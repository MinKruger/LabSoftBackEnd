"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn("postagens", "id_tipoPostagem", {
        transaction,
      });
      await queryInterface.removeColumn("postagens", "id_atletica", {
        transaction,
      });
      await queryInterface.removeColumn("postagens", "likes", { transaction });

      await queryInterface.dropTable("tipo_postagem", { transaction });

      await queryInterface.addColumn(
        "postagens",
        "tipo",
        {
          type: Sequelize.ENUM("EVENTOS", "NOTICIAS", "JOGOS"),
          allowNull: false,
        },
        { transaction }
      );
      await queryInterface.addColumn(
        "postagens",
        "imagem",
        {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        { transaction }
      );
      await queryInterface.addColumn(
        "postagens",
        "descricao",
        {
          type: Sequelize.STRING(300),
          allowNull: false,
        },
        { transaction }
      );
      await queryInterface.addColumn(
        "postagens",
        "data_evento",
        {
          type: Sequelize.STRING(30),
          allowNull: true,
        },
        { transaction }
      );
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        "tipo_postagem",
        {
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
        },
        { transaction }
      );

      await queryInterface.removeColumn("postagens", "tipo", { transaction });
      await queryInterface.removeColumn("postagens", "imagem", { transaction });
      await queryInterface.removeColumn("postagens", "data_evento", {
        transaction,
      });
      await queryInterface.removeColumn("postagens", "descricao", {
        transaction,
      });

      await queryInterface.addColumn(
        "postagens",
        "id_tipoPostagem",
        {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: {
              tableName: "tipo_postagem",
            },
            key: "id",
          },
        },
        { transaction }
      );

      await queryInterface.addColumn(
        "postagens",
        "id_atletica",
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

      await queryInterface.addColumn(
        "postagens",
        "likes",
        {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        { transaction }
      );
    });
  },
};
