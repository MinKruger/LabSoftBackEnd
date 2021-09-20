"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("tipo_usuario", {
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

    await queryInterface.createTable("usuarios", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      login: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      senha: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      id_tipoUsuario: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "tipo_usuario",
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
    });

    await queryInterface.createTable("atleticas", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(200),
        allowNull: false,
        unique: true,
      },
      logo: {
        type: Sequelize.TEXT,
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

    await queryInterface.createTable("cursos", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      id_atletica: {
        type: Sequelize.UUID,
        onDelete: "SET NULL",
        references: {
          model: {
            tableName: "atleticas",
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
    });

    await queryInterface.createTable("fases", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(200),
        defaultValue: 0,
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

    await queryInterface.createTable("modalidades", {
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

    await queryInterface.createTable("cargos", {
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

    await queryInterface.createTable("alunos", {
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
      id_curso: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "cursos",
          },
          key: "id",
        },
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
      id_atletica: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "atleticas",
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
    });

    await queryInterface.createTable("dce", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
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

    await queryInterface.createTable("postagens", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      titulo: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },
      likes: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_tipoPostagem: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "tipo_postagem",
          },
          key: "id",
        },
      },
      id_dce: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "dce",
          },
          key: "id",
        },
      },
      id_atletica: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "atleticas",
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
    });

    await queryInterface.createTable("comentarios", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      conteudo: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },
      likes: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_postagem: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "postagens",
          },
          key: "id",
        },
      },
      id_aluno: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "alunos",
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
    });

    await queryInterface.createTable("campeonatos", {
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
      ano: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      id_vencedor: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "atleticas",
          },
          key: "id",
        },
      },
      id_modalidade: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "modalidades",
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
    });

    await queryInterface.createTable("campeonato_atletica", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      id_campeonato: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "campeonatos",
          },
          key: "id",
        },
      },
      id_atletica: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "atleticas",
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
    });

    await queryInterface.createTable("jogos", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      id_time1: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "atleticas",
          },
          key: "id",
        },
      },
      id_time2: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "atleticas",
          },
          key: "id",
        },
      },
      data_jogo: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      placar1: {
        type: Sequelize.INTEGER,
      },
      placar2: {
        type: Sequelize.INTEGER,
      },
      id_vencedor: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: "atleticas",
          },
          key: "id",
        },
      },
      id_campeonato: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "campeonatos",
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
    });

    await queryInterface.createTable("diretorias", {
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
      id_cargo: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "cargos",
          },
          key: "id",
        },
      },
      id_atletica: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "atleticas",
          },
          key: "id",
        },
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
      id_dce: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "dce",
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("diretorias");
    await queryInterface.dropTable("jogos");
    await queryInterface.dropTable("campeonato_atletica");
    await queryInterface.dropTable("campeonatos");
    await queryInterface.dropTable("comentarios");
    await queryInterface.dropTable("postagens");
    await queryInterface.dropTable("dce");
    await queryInterface.dropTable("alunos");
    await queryInterface.dropTable("atleticas_cursos");
    await queryInterface.dropTable("atleticas");
    await queryInterface.dropTable("cargos");
    await queryInterface.dropTable("modalidades");
    await queryInterface.dropTable("tipo_postagem");
    await queryInterface.dropTable("fases");
    await queryInterface.dropTable("cursos");
    await queryInterface.dropTable("usuarios");
    await queryInterface.dropTable("tipo_usuario");
  },
};
