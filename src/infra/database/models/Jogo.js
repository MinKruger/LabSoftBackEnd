const { DataTypes, Model } = require("sequelize");

class JogoModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        id_time1: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: {
              tableName: "atleticas",
            },
            key: "id",
          },
        },
        id_time2: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: {
              tableName: "atleticas",
            },
            key: "id",
          },
        },
        data_jogo: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        hora_jogo: {
          type: DataTypes.STRING(30),
          allowNull: true,
        },
        placar1: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        placar2: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        local: {
          type: DataTypes.STRING(200),
          allowNull: true,
        },
        id_fase: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: {
              tableName: "fases",
            },
            key: "id",
          },
        },
        id_campeonato: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: {
              tableName: "campeonatos",
            },
            key: "id",
          },
        },
      },
      {
        sequelize,
        modelName: "jogos",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.atleticas, {
      foreignKey: "id_time1",
    });

    this.belongsTo(models.atleticas, {
      foreignKey: "id_time2",
    });

    this.belongsTo(models.fases, {
      foreignKey: "id_fase",
    });

    this.belongsTo(models.campeonatos, {
      foreignKey: "id_campeonato",
    });
  }
}

exports.JogoModel = JogoModel;
