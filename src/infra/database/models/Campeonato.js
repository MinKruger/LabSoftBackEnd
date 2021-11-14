const { DataTypes, Model } = require("sequelize");

class CampeonatoModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        nome: {
          type: DataTypes.STRING(250),
          allowNull: false,
        },
        ano: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        id_modalidade: {
          type: DataTypes.UUID,
          references: {
            model: {
              tableName: "modalidades",
            },
            key: "id",
          },
        },
        id_evento: {
          type: DataTypes.UUID,
          references: {
            model: {
              tableName: "eventos",
            },
            key: "id",
          },
        },
        status: {
          type: DataTypes.ENUM(
            "ANDAMENTO",
            "ENCERRADO",
            "CANCELADO",
            "AGUARDANDO"
          ),
          defaultValue: "AGUARDANDO",
          allowNull: false,
        },
        id_vencedor: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: {
              tableName: "atleticas",
            },
            key: "id",
          },
        },
      },
      {
        sequelize,
        modelName: "campeonatos",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.atleticas, {
      foreignKey: "id_vencedor",
      as: "vencedor",
    });

    this.belongsTo(models.modalidades, {
      foreignKey: "id_modalidade",
    });

    this.belongsTo(models.eventos, {
      foreignKey: "id_evento",
    });
  }
}

exports.CampeonatoModel = CampeonatoModel;
